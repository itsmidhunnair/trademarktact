interface Props {
  title: string;
  center?: boolean;
  titleClass?: string;
  color?: "dark" | "light";
  specialText?: string;
  specialTextClass?: string;
}

/**
 * A component that displays a title with optional centering and color customization.
 */
const SectionTitle = ({
  title,
  center = true,
  color = "dark",
  titleClass = "",
  specialText,
  specialTextClass,
}: Props) => {
  const type = {
    light: "text-white",
    dark: "text-gray-700",
  };

  return (
    <>
      <p
        className={`${titleClass} text-5xl font-semibold uppercase text-gray-700 max-sm:text-3xl ${
          center ? "text-center" : ""
        } ${type[color]}`}
      >
        {title}{" "}
        {specialText && <span className={specialTextClass}>{specialText}</span>}
      </p>
      <div
        className={`mt-2 w-28 h-1 bg-primary  ${center ? "mx-auto" : ""}`}
      ></div>
    </>
  );
};

export default SectionTitle;
