import { Post } from './Post';
import style from './Projects.module.css';

export function Projects() {
  return (
    <section className={style.sec}>
      <div className={style.about}>
        <span>Sobre mim</span>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Sapien in monti palavris qui num significa nadis i pareci latim.Mé faiz elementum girarzis, nisi eros vermeio.</p>
        <div>
      </div>

        <div className={style.projects}>
          <Post />
        </div>

        <div>

        </div>
      </div>
    </section>
  );
}