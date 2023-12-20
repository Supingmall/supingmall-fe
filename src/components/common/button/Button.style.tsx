import styled from "@emotion/styled";

interface SizeProps {
  big: { padding: string; fontSize: string; borderRadius?: string };
  medium: { padding: string; fontSize: string; borderRadius?: string };
  small: { padding: string; fontSize: string; borderRadius?: string };
}

interface ButtonStyleProps {
  size: "big" | "medium" | "small"; // 가능한 값으로 제한
  bg?: string;
  color?: string;
  bold?: number;
}

const size: SizeProps = {
  big: { padding: "16px", fontSize: "2rem", borderRadius: "12px" },
  medium: { padding: "12px", fontSize: "1.6rem", borderRadius: "10px" },
  small: { padding: "8px", fontSize: "1.4rem", borderRadius: "8px" },
};

export const Button = styled.button<ButtonStyleProps>`
  outline: none;
  border: none;
  cursor: pointer;

  padding: ${(props) => size[props.size].padding};
  border-radius: ${(props) => size[props.size].borderRadius};

  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.bold};
`;
