export const WaysContainer = `div
  margin-top: 20px;
  @media screen and (max-width: 992px) {
    margin-top: 0;
  }
`;

export const WaysWrapper = `div
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 120px auto 0 auto;
  padding: 30px 0;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const Ways = `div
  span {
    display: flex;
    align-items: center;
    width: unset;
    max-width: 628px;
    margin: 20px 12px;
    padding: 16px;
    background-color: var(--ifm-color-emphasis-0);
    box-shadow: 0 4px 8px rgb(14 14 14 / 10%);
  }

  img {
    width: auto;
    height: 32px;
    margin-right: 10px;
  }

  @media screen and (max-width: 992px) {
    span {
      max-width: 328px;
      margin: 16px;
      align-items: flex-start;
    }
  }
`;
