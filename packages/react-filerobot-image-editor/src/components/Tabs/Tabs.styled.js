/** External Dependencies */
import styled from "styled-components";
import Label from "@scaleflex/ui/core/label";

const StyledTabItem = styled.div(
  ({ theme }) => `
    width: 72px;
    min-height: 66px;
    padding: 4px 2px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: white;
    align-items: center;
    justify-content: center;
    border: 1px solid #dedede;
    [data-phone='true'] & {
      margin-bottom: 0;
      height: 50px;
      border-radius: 0;
    }

    svg {
      color: black;
    }

    &,
    * {
      cursor: pointer;
    }

    &:hover {
      border: 2px solid #dedede;
    }

    &[aria-selected='true'] {
      background: #dedede;

      * {
        color: black;
      }
    }
  `
);

const StyledTabItemLabel = styled(Label)(
  ({ theme }) => `
  color: black;
  font-size: 12px;
  line-height: 14px;
  font-family: 'Open Sans', sans-serif;

  span {
    white-space: normal;
  }

  [data-phone='true'] & {
    font-size: 10px;
  }
`
);

export { StyledTabItem, StyledTabItemLabel };
