import sass from "./Footer.module.scss";

import { FC } from "react";
import { Container } from "../Container/Container";

import { CgFileDocument } from 'react-icons/cg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export const Footer: FC = () => {
  return (
    <footer className={sass.footer}>
      <Container>
        <div className={sass.footerInner}>
          <ul className={sass.socialList}>
            <li className={sass.socialItem}>
              <a className={sass.socialLink} href="https://www.linkedin.com/in/bohdan-ryzhko/" rel="noreferrer" target="_blank">
                <AiFillLinkedin size={25} color="#fff" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className={sass.socialItem}>
              <a className={sass.socialLink} href="https://github.com/bohdan-ryzhko" rel="noreferrer" target="_blank">
                <AiFillGithub size={25} color="#fff" />
                <span>GitHub</span>
              </a>
            </li>
            <li className={sass.socialItem}>
              <a className={sass.socialLink} href="https://drive.google.com/file/d/1yqrLOvqKpFEVheYVNYDBigmzECXG8E4L/view?usp=sharing" rel="noreferrer" target="_blank">
                <CgFileDocument size={25} color="#fff" />
                <span>Summary</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
