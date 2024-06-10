import PropTypes from "prop-types";
import React from "react";

interface Props {
  children: React.ReactNode;
  bgType?: "primary" | "secondary" | "blur";
  id?: string;
}

/**
 * A wrapper component that applies background styles based on the `bgType` prop.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be displayed within the section.
 * @param {('primary'|'secondary'|'blur')} [props.bgType='primary'] - The background type to apply.
 * @returns {JSX.Element} The rendered component.
 */
const SectionWrapper = ({ children, bgType = "primary", id }: Props) => {
  const types = {
    primary: "bg-white",
    secondary: "bg-gray-100",
    blur: "bg-gray-900/40 backdrop-blur-md",
  };

  return (
    <div className={`${types[bgType]}`} id={id}>
      <div className="section-container">{children}</div>;
    </div>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  bgType: PropTypes.oneOf(["primary", "secondary"]),
  id: PropTypes.string.isRequired,
};

export default SectionWrapper;
