import sass from "./SkeletonSchema.module.scss";
import { FC } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { Container } from "../Container/Container";

export const SkeletonSchema: FC = () => {
  return (
    <Container>
      <ul className={sass.skeletonList}>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
        <li className={sass.skeletonItem}>
          <SkeletonLoader style={{ borderRadius: "20px", marginBottom: 10 }} height={350} />
          <SkeletonLoader style={{ borderRadius: "20px" }} height={20} />
        </li>
      </ul>
    </Container>
  )
}
