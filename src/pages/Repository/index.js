import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssuesList,
  IssuesFilter,
  IssuesPages,
} from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: 'open',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { filter, page } = this.state;

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filter,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { filter, page } = this.state;

    const [issues] = await Promise.all([
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filter,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      issues: issues.data,
      loading: false,
    });
  };

  handleFilter = async option => {
    await this.setState({ filter: option, page: 1 });
    this.loadIssues();
  };

  handlePage = async pageNumber => {
    await this.setState({ page: pageNumber });
    this.loadIssues();
  };

  render() {
    const { repository, issues, loading, page, filter } = this.state;
    if (loading) {
      return <Loading>Loading</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">back to repositories</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssuesFilter>
          <div className="btn-group">
            <button
              type="button"
              className={`btn blue ${filter === 'all' ? 'selected' : ''}`}
              onClick={() => this.handleFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`btn green ${filter === 'open' ? 'selected' : ''}`}
              onClick={() => this.handleFilter('open')}
            >
              Open
            </button>
            <button
              type="button"
              className={`btn red ${filter === 'closed' ? 'selected' : ''}`}
              onClick={() => this.handleFilter('closed')}
            >
              Closed
            </button>
          </div>
        </IssuesFilter>
        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
        <IssuesPages>
          <div className="btn-group">
            <button
              type="button"
              onClick={() => {
                this.handlePage(page - 1);
              }}
              className="btn"
              disabled={`${page === 1 ? 'disable' : ''}`}
            >
              Previous
            </button>
            <button type="button" className="btn">
              {page}
            </button>
            <button
              type="button"
              onClick={() => {
                this.handlePage(page + 1);
              }}
              className="btn"
            >
              Next
            </button>
          </div>
        </IssuesPages>
      </Container>
    );
  }
}
