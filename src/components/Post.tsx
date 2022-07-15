import style from './Post.module.css';

export function Post() {
  return(
    <a>
      <div>
        <img src="" alt="" />
      </div>
      <div className={style.post}>
        <h3>Titulo</h3>
        <p>é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria </p>
      </div>
    </a>
  )
}                                   