import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <div className="about-image-side">
            <div className="about-img-frame">
              <Image 
                src="/profile.jpg" 
                alt="Tasin" 
                width={250} 
                height={250} 
                className="about-img"
              />
              <div className="about-img-decor"></div>
            </div>
          </div>
          
          <div className="about-text">
            <p>
              My journey into the world of code started with a simple curiosity about how the internet works. 
              What began as tinkering with HTML/CSS soon turned into a full-blown passion for building 
              <strong> scalable, real-time applications</strong> that solve actual problems. 
              I find immense joy in the process of turning a complex idea into a functional digital reality.
            </p>
            <p>
              I thrive in the <strong>MERN Stack</strong> ecosystem and love working on projects that involve 
              real-time data, like my auction platform <strong>BidBD</strong>. I enjoy the challenge of optimizing 
              database queries and creating seamless, intuitive user interfaces that feel premium and fast.
            </p>
            <p>
              When I&apos;m not staring at a code editor, you&apos;ll probably find me on a <strong>cricket field</strong> 
              or exploring <strong>digital painting</strong>. I believe that a creative mind outside of programming 
              helps me approach coding problems with a unique and fresh perspective.
            </p>
          </div>
          <div className="about-info">
            <div className="info-row">
              <div className="info-icon">📍</div>
              <div>
                <div className="info-label">Location</div>
                <div className="info-val">Bangladesh</div>
              </div>
            </div>
            <div className="info-row">
              <div className="info-icon">💼</div>
              <div>
                <div className="info-label">Role</div>
                <div className="info-val">Full Stack Developer</div>
              </div>
            </div>
            <div className="info-row">
              <div className="info-icon">✉️</div>
              <div>
                <div className="info-label">Email</div>
                <div className="info-val">hsttasin90@gmail.com</div>
              </div>
            </div>
            <div className="info-row">
              <div className="info-icon">🟢</div>
              <div>
                <div className="info-label">Status</div>
                <div className="info-val">Open to Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
