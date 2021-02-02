import { StyledCard } from "./styles";

export default function Card({ title = "", children, ...props }) {
  return (
    <StyledCard
      {...props}
      variants={variants}
      initial="hidden"
      animate="visible"
      aria-labelledby="card-title"
    >
      {title && <h2 id="card-title">{title}</h2>}
      <div>{children}</div>
    </StyledCard>
  );
}

const variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.2 } },
};
