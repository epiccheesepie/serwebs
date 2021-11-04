import { observer } from 'mobx-react';
import { FC } from 'react';

import { Search } from '../Search';
import { Service } from '../Service';
import { Core } from './Core';
import css from './Layout.module.scss';

const services = [
  {
    title: 'YouCanChoose',
    logoImgSrc: 'http://youcanchoose.ru/img/logo.png',
    background: 'rgb(255, 113, 57)',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: false
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'http://youcanchoose.ru/img/logo.png',
    background: '#0060DF',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: false
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'http://youcanchoose.ru/img/logo.png',
    background: 'rgb(255, 113, 57)',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: false
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'https://yastatic.net/s3/home-static/_/6/L/sRWLDRTog6jt1kgf7Kg3BQ71g.svg',
    background: '#0060DF',
    src: 'http://youcanchoose.ru',
    recommendation: true,
    common: false
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'http://youcanchoose.ru/img/logo.png',
    background: '#00b104',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: true
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'http://youcanchoose.ru/img/logo.png',
    background: '#000',
    src: 'http://youcanchoose.ru',
    recommendation: true,
    common: true
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMjAgMTUiPgogICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS43NjIgOS4wMTZINC43MDR2NS43NDhIMFYwaDQuNzA0djUuMzc0SDUuODZMOC40NDcgMGg0Ljc4Mkw5Ljg5NyA2LjkxbDMuODQxIDcuODU0SDguNTY0TDUuNzYyIDkuMDE2em0xNi4wNS4zNTRoLS4yNzRsLTIuOTc4IDIuNjE4djIuNzc2aC00LjUwOFYyLjk1M2g0LjUwOHY0LjQ0OWguMzkxbDIuODYyLTIuNTJ2LTEuOTNoNC41MDd2MTEuODEyaC00LjUwN1Y5LjM3em0xMy42NDEgMS4yMmgtMy4wNTd2NC4xNzRoLTQuNTA4VjIuOTUzaDQuNTA4djQuMDE2aDMuMDU3VjIuOTUzaDQuNTA4djExLjgxaC00LjUwOHYtNC4xNzJ6bTExLjk1NS03Ljg1NGMuODEgMCAxLjU2MS4xMjUgMi4yNTQuMzc0LjY5Mi4yNSAxLjI5LjYzIDEuNzkzIDEuMTQyLjUwMy41MTIuODk4IDEuMTUyIDEuMTg2IDEuOTIuMjg3Ljc2Ny40MzEgMS42NjMuNDMxIDIuNjg2IDAgMS4wMzctLjE0NCAxLjk0LS40MzEgMi43MDctLjI4OC43NjgtLjY4MyAxLjQwNC0xLjE4NiAxLjkxYTQuNzk0IDQuNzk0IDAgMCAxLTEuNzgzIDEuMTMxIDYuNDYzIDYuNDYzIDAgMCAxLTIuMjI1LjM3NGgtLjYwN2E2Ljg5NiA2Ljg5NiAwIDAgMS0yLjMxMy0uMzc0IDQuODQzIDQuODQzIDAgMCAxLTEuODIyLTEuMTMyYy0uNTEtLjUwNS0uOTA4LTEuMTQxLTEuMTk2LTEuOTA5LS4yODctLjc2OC0uNDMxLTEuNjctLjQzMS0yLjcwNyAwLTEuMDIzLjE0NC0xLjkxOS40MzEtMi42ODcuMjg4LS43NjcuNjgzLTEuNDA3IDEuMTg2LTEuOTE5YTQuNzIyIDQuNzIyIDAgMCAxIDEuNzkzLTEuMTQyIDYuNjY2IDYuNjY2IDAgMCAxIDIuMjczLS4zNzRoLjY0N3ptLS4yNTUgOC40NjVjLjQ5NyAwIC44OTktLjIgMS4yMDYtLjYuMzA3LS40LjQ2LS45ODIuNDYtMS43NDMgMC0uNzYtLjE1My0xLjM0Mi0uNDYtMS43NDItLjMwNy0uNC0uNzEtLjYtMS4yMDYtLjZoLS4xNTZjLS41MjMgMC0uOTM1LjItMS4yMzUuNi0uMy40LS40NS45ODEtLjQ1IDEuNzQycy4xNSAxLjM0Mi40NSAxLjc0MmMuMy40LjcxMi42IDEuMjM1LjZoLjE1NnpNNTMuOTkzIDBoMTIuNTQzdjE0Ljc2NGgtNC43MDRWMy44MzloLTMuMTM1djEwLjkyNWgtNC43MDRWMHptMTkuNzk0IDIuNzM2Yy44MSAwIDEuNTYyLjEyNSAyLjI1NC4zNzQuNjkzLjI1IDEuMjkuNjMgMS43OTMgMS4xNDIuNTAzLjUxMi44OTkgMS4xNTIgMS4xODYgMS45Mi4yODguNzY3LjQzMSAxLjY2My40MzEgMi42ODYgMCAxLjAzNy0uMTQzIDEuOTQtLjQzIDIuNzA3LS4yODguNzY4LS42ODQgMS40MDQtMS4xODcgMS45MWE0Ljc5NCA0Ljc5NCAwIDAgMS0xLjc4MyAxLjEzMSA2LjQ2MyA2LjQ2MyAwIDAgMS0yLjIyNC4zNzRoLS42MDhhNi44OTYgNi44OTYgMCAwIDEtMi4zMTMtLjM3NCA0Ljg0MyA0Ljg0MyAwIDAgMS0xLjgyMi0xLjEzMmMtLjUxLS41MDUtLjkwOC0xLjE0MS0xLjE5Ni0xLjkwOS0uMjg3LS43NjgtLjQzLTEuNjctLjQzLTIuNzA3IDAtMS4wMjMuMTQzLTEuOTE5LjQzLTIuNjg3LjI4OC0uNzY3LjY4My0xLjQwNyAxLjE4Ni0xLjkxOWE0LjcyMiA0LjcyMiAwIDAgMSAxLjc5My0xLjE0MiA2LjY2NiA2LjY2NiAwIDAgMSAyLjI3NC0uMzc0aC42NDZ6bS0uMjU0IDguNDY1Yy40OTYgMCAuODk4LS4yIDEuMjA1LS42LjMwNy0uNC40Ni0uOTgyLjQ2LTEuNzQzIDAtLjc2LS4xNTMtMS4zNDItLjQ2LTEuNzQyLS4zMDctLjQtLjcwOS0uNi0xLjIwNS0uNmgtLjE1N2MtLjUyMyAwLS45MzQuMi0xLjIzNS42LS4zLjQtLjQ1Ljk4MS0uNDUgMS43NDJzLjE1IDEuMzQyLjQ1IDEuNzQyYy4zLjQuNzEyLjYgMS4yMzUuNmguMTU3em0xNC43OTYtMS44M2gtLjI3NGwtMi45OCAyLjYxN3YyLjc3NmgtNC41MDdWMi45NTNoNC41MDh2NC40NDloLjM5MmwyLjg2MS0yLjUydi0xLjkzaDQuNTA4djExLjgxMmgtNC41MDhWOS4zN3ptMTcuNjk3LjA5OGMtLjAzOS45Ny0uMjA5IDEuODA0LS41MSAyLjUtLjMuNjk1LS42OTggMS4yNy0xLjE5NSAxLjcyMmE0LjYwOSA0LjYwOSAwIDAgMS0xLjc0NC45OTQgNy4yMDUgNy4yMDUgMCAwIDEtMi4xNzUuMzE1aC0uNjA4Yy0uODM2IDAtMS42MS0uMTI4LTIuMzIyLS4zODRhNC45NjMgNC45NjMgMCAwIDEtMS44NDItMS4xNTFjLS41MTYtLjUxMi0uOTE4LTEuMTUyLTEuMjA2LTEuOTItLjI4Ny0uNzY3LS40MjQtMS42NjMtLjQxMS0yLjY4Ny4wMTMtMS4wMjMuMTYzLTEuOTE5LjQ1LTIuNjg3LjI4OC0uNzY3LjY4My0xLjQwNyAxLjE4Ni0xLjkxOUE0LjgyNSA0LjgyNSAwIDAgMSA5Ny40NDIgMy4xYTYuNTExIDYuNTExIDAgMCAxIDIuMjc0LS4zODNoLjY0N2MuNzcgMCAxLjQ5Mi4xMDggMi4xNjUuMzI0LjY3My4yMTcgMS4yNjEuNTQ4IDEuNzY0Ljk5NC41MDMuNDQ3LjkwOCAxLjAwMSAxLjIxNSAxLjY2NC4zMDcuNjYzLjQ4IDEuNDM0LjUyIDIuMzEzaC00LjI5M2MtLjA2NS0uNDk5LS4yNDUtLjg3My0uNTM5LTEuMTIyLS4yOTMtLjI1LS42NTYtLjM3NC0xLjA4Ny0uMzc0aC0uMTc3Yy0uNTEgMC0uOTE0LjItMS4yMTUuNi0uMy40LS40NS45ODEtLjQ1IDEuNzQycy4xNSAxLjM0Mi40NSAxLjc0MmMuMy40LjcwNi42IDEuMjE1LjZoLjE3N2MuNDU3IDAgLjgzNi0uMTQ3IDEuMTM2LS40NDIuMzAxLS4yOTUuNDctLjcyNS41MS0xLjI5aDQuMjcyem02LjQxLjg0NmgtLjgyNHY0LjQ0OWgtNC41MDhWMi45NTNoNC41MDh2NC4xMzRoLjg0M2wyLjI3My00LjEzNGg0LjY4NGwtMy4wMTggNS40OTJMMTIwIDE0Ljc2NGgtNS4wMTdsLTIuNTQ4LTQuNDQ5eiIvPgo8L3N2Zz4K',
    background: 'linear-gradient(#e66465, #9198e5)',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: false
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'http://localhost:3000/main.png',
    background: '#000',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: false
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'https://yastatic.net/s3/home-static/_/6/L/sRWLDRTog6jt1kgf7Kg3BQ71g.svg',
    background: '#6943b7',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: false
  },
  {
    title: 'YouCanChoose',
    logoImgSrc: 'http://youcanchoose.ru/img/logo.png',
    background: '#0060DF',
    src: 'http://youcanchoose.ru',
    recommendation: false,
    common: false
  }
];

export const Layout: FC = observer(() => {
    return (
        <Core>
          <Search />
          <div className={css.wrapper}>
            {services.map((service, index) => (
              <Service
                key={String(index)}
                logoImgSrc={service.logoImgSrc}
                background={service.background}
                src={service.src}
                recommendation={service.recommendation}
                common={service.common}
              />
            ))}
          </div>
        </Core>
    );
})
