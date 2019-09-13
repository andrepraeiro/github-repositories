import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;
      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #5708;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssuesFilter = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  flex: 1;
  margin-top: 20px;

  .btn {
    position: relative;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    border: 2px solid #555;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 4px;
    flex: 1 1 auto;
    align-items: flex-start;
  }

  .btn:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .blue {
    background: #007bffa1;
  }

  .green {
    background: #28a745eb;
  }

  .red {
    background: #bd2130bf;
  }

  .selected {
    border: 1px solid #eee;
  }
`;

export const IssuesPages = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  flex: 1;
  margin-top: 20px;

  .btn {
    position: relative;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    color: #007bff;
    background: #fff;
    border: 1px solid #dee2e6;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    flex: 1 1 auto;
    align-items: flex-start;
  }
  .btn:disabled {
    color: #0000007a;
    cursor: not-allowed;
  }

  .btn:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
