import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.8rem 1rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
