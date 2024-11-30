import React, { useState } from "react";
import "./ParentingStories.css";
import CommentForm from "./CommentForm";
import BlogFooter from "../Blog/BlogFooter";

function ParentingStories() {
  const [currentDiv, setCurrentDiv] = useState(1);
  const totalDivs = 4;
  const changeDiv = (direction) => {
    if (direction === "next") {
      setCurrentDiv((currentDiv % totalDivs) + 1);
    } else if (direction === "prev") {
      setCurrentDiv(((currentDiv - 2 + totalDivs) % totalDivs) + 1);
    }
  };
  return (
    <div className="p-">
      <div className={`p-content ${currentDiv === 1 ? "active" : ""}`}>
        <main className="p-main-container">
          <div className="p-content-wrapper">
            <div className="p-content-section">
              <h1 className="p-section-title">
                Parenting Stories – Share Your Parenting Journey: Click,
                Connect, Inspire!
              </h1>
              <img
                src="https://blog.uptodd.com/wp-content/uploads/2023/11/SHARE-SHINE-1024x576.png"
                alt="Parenting Stories"
                className="p-story-image"
              />
              <p className="p-section-paragraph">
                In the realm of parenting, every journey is a unique story
                waiting to be told. At UpTodd, we understand the power of your
                narrative, and we invite you to share your parenting journey
                effortlessly to become part of UpTodd Parenting Stories Series.
                In just 5 minutes, you can become a source of inspiration for
                millions, and your story will echo across our community.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">
                Why Share Your Parenting Story?
              </h1>
              <p className="p-section-paragraph">
                Your experiences matter, and by sharing them, you contribute to
                a collective narrative that resonates with parents worldwide by
                becoming part of UpTodd Parenting Stories Series. We believe in
                the authenticity of your journey, and the simplicity of your
                story can be a beacon of hope for others navigating similar
                paths.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">How to Share Your Story:</h1>
              <p className="p-section-paragraph">
                <a href="#" className="p-link">
                  Click here
                </a>{" "}
                to share your parenting story in a quick and easy 5-minute
                process. No hassles – just your authentic narrative.
              </p>
              <h1 className="p-section-title">What Happens Next:</h1>
              <ul>
                <li>
                  <strong>Best Story of the Week:</strong>
                  <ul>
                    <li>
                      We will feature the most compelling and authentic story on
                      our prominent platforms
                    </li>
                    <li>
                      This includes Instagram, Facebook, a special blog on
                      UpTodd titled “A Lifetime Memory,” and our partner
                      channels reaching 3 million+ users.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">What’s in It for You?</h1>
              <ul className="p-list">
                <li>
                  <strong>Token of Appreciation:</strong>
                  <ul className="p-nested-list">
                    <li>Receive a special token for sharing your story.</li>
                  </ul>
                </li>
                <li>
                  <strong>Story of the Month:</strong>
                  <ul className="p-nested-list">
                    <li>
                      Highlight your story in a podcast and plant a tree in your
                      baby’s name.
                    </li>
                    <li>
                      The podcast will be circulated to partner e-news channels,
                      reaching an audience of 100 million+
                    </li>
                    <li>
                      We will send a personalized goodie and plant a tree in
                      your baby’s name as a heartfelt gesture
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">CONCLUSION</h1>
              <p className="p-section-paragraph">
                Your story is unique, and we want to make the process of sharing
                it as effortless as possible. Click here to become a part of a
                community that celebrates the simplicity, joys, and challenges
                of parenthood. Let’s connect through the universal language of
                parenting stories and create a tapestry that resonates with
                parents worldwide.{" "}
              </p>
              <p className="p-section-paragraph">
                Are you ready to share your story in just 5 minutes? Click here
                and let’s embark on this inspiring journey together!
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className={`p-content ${currentDiv === 2 ? "active" : ""}`}>
        <main className="p-main-container">
          <div className="p-content-wrapper">
            <div className="p-content-section">
              <h1 className="p-section-title">
                UpTodd Partners with MOM Influencer Asha Solanki to Provide a
                Bright Start for Babies
              </h1>
              <img
                src="https://blog.uptodd.com/wp-content/uploads/2023/11/JOIN-1536x864.png"
                alt="Parenting Stories"
                className="p-story-image"
              />
              <p className="p-section-paragraph">
                Welcoming a newborn into the world is a joyous occasion, but it
                also marks the beginning of a challenging journey for new
                mothers. UpTodd is proud to announce its partnership with the
                Instagram MOM Influencer Asha Solanki, owner of instagram handle
                Manya_solanki. Together, we embark on a mission to support and
                guide new mothers in laying a strong foundation for their
                babies’ first three years of life.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">
                Meet Our Official Partner Ambassador, MOM Influencer Asha
                Solanki
              </h1>
              <p className="p-section-paragraph">
                Asha Solanki is a leading influencer with a passion for
                assisting new mothers at various levels through. As our official
                partner ambassador, she plays a pivotal role in helping mothers
                navigate the challenges of early motherhood. Asha Solanki’s
                expertise and influence seamlessly align with our shared vision
                of making the world a better place for the upcoming generation.
                Together, we are dedicated to providing a bright start to their
                lives through informed and compassionate parenting.
              </p>
              <p className="p-section-paragraph">
                UpTodd’s Unique Approach: At UpTodd, we understand the
                importance of those critical early years in a child’s
                development. Our approach is meticulously curated, leveraging
                insights from 10,000+ research papers and collaborations with
                experts from MIT, Stanford, IITs, and AIIMS. This ensures a
                robust, evidence-based foundation for our programs.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">
                Our program integrates techniques from globally recognized
                methodologies, including:
              </h1>
              <h1 className="p-section-title">What Happens Next:</h1>
              <ol>
                <li>Early stimulation from Glenn Doman.</li>
                <li>Montessori’s emphasis on independence and exploration.</li>
                <li>
                  Howard Gardner’s theory of multiple intelligences from Harvard
                  University.
                </li>
                <li>Waldorf’s holistic approach.</li>
                <li>The Reggio Emilia Approach’s focus on creativity.</li>
                <li>Indigenous parenting and mindful parenting.</li>
              </ol>
              <p className="p-section-paragraph">
                Empowering Babies Worldwide: UpTodd’s comprehensive approach
                empowers babies worldwide to thrive and reach their full
                potential with evidence-based guidance. By blending best
                practices from various educational philosophies, we provide each
                child with a personalized and holistic learning experience.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">
                Exclusive Offer for Asha Solanki’s Community
              </h1>
              <p className="p-section-paragraph">
                As a special token of appreciation for joining us on this
                journey, we’re offering an exclusive 25% flat discount on any
                program when you use the coupon code “asha25” This discount is
                our way of extending gratitude to the members of Asha Solanki’s
                community. Click to Book Demo Now{" "}
              </p>
              <p className="p-section-paragraph">
                Join UpTodd and Asha Solanki in our mission to make the world a
                better place for the next generation. Together, we strive to
                provide new mothers with the knowledge and tools they need to
                give their babies a bright start in their first three years of
                life. Embrace the opportunity to nurture your little ones and
                guide them towards a happy, healthy future.
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className={`p-content ${currentDiv === 3 ? "active" : ""}`}>
        <main className="p-main-container">
          <div className="p-content-wrapper">
            <div className="p-content-section">
              <h1 className="p-section-title">
                Parenting Story of POOJA : A Mom’s Morning Magic – A Path to
                Happy Baby
              </h1>
              <img
                src="https://blog.uptodd.com/wp-content/uploads/2023/11/Parenting-Story-1536x864.png"
                alt="Parenting Stories"
                className="p-story-image"
              />
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">
                Week’s Story – Parenting Story of POOJA
              </h1>
              <p className="p-section-paragraph">
                In the quiet dawn of each day, Poorva Ingale rose with a sense
                of purpose. The news of impending motherhood had filled her with
                excitement, and she was determined to make these nine months
                truly special. Setting her alarm for 5 am became a ritual, as
                she crafted a daily routine infused with love and care, driven
                by the belief that her actions during pregnancy could shape her
                baby’s future.
              </p>
              <p className="p-section-paragraph">
                The simplicity of each morning became a comforting melody, a
                harmonious blend of healthy habits and positive thoughts. Poorva
                recognized the incredible journey her baby’s brain was on,
                particularly during those critical first three years. With this
                awareness, she approached each day with intention, eager to play
                an active role in her child’s development.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">Baby’s Growth Pattern</h1>
              <p className="p-section-paragraph">
                Nine months later, the much-anticipated moment arrived, and her
                little one graced the world with joy and laughter. At 16 months
                old, he eagerly greeted the day at 6 am, his eyes sparkling with
                curiosity. Come bedtime at 9 pm, a peaceful hush settled over
                their home, thanks to the soothing routines they shared.
              </p>
              <p className="p-section-paragraph">
                As Poorva observed her child’s growth, she couldn’t help but
                marvel at the constant joy radiating from his eyes. He exhibited
                stability, boundless energy, and a remarkable ability to make
                friends with everyone he encountered. His 24/7 smiling face
                became a heartwarming reflection of the love and care woven into
                the fabric of their daily lives.
              </p>
              <p className="p-section-paragraph">
                Motivated by the transformative power of her journey, Poorva
                felt compelled to share her story with other moms. Her
                experiences became a guide, an ode to the idea that a simple
                routine coupled with a generous dose of love could indeed make
                parenting a happy and fulfilling adventure. Through reciting the
                right advice and embracing the joys of motherhood, Poorva’s
                narrative became an inspiration, echoing the sentiment that the
                smallest gestures can lead to the most profound and blissful
                outcomes in the realm of parenting. Parenting Story of Pooja is
                a motivation for mother’s part of UpTodd community for giving
                strong foundation to the baby.
              </p>
              <p className="p-section-paragraph">
                Are you ready to share your story in just 5 minutes? Click here
                and let’s embark on this inspiring journey together!
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className={`p-content ${currentDiv === 4 ? "active" : ""}`}>
        <main className="p-main-container">
          <div className="p-content-wrapper">
            <div className="p-content-section">
              <h1 className="p-section-title">
                UpTodd Partners with MOM Influencer Swapnil to Provide a Bright
                Start for Babies
              </h1>
              <img
                src="https://blog.uptodd.com/wp-content/uploads/2023/12/blog-banner-asha-solanki-mom-inluencer-1536x864.png"
                alt="Parenting Stories"
                className="p-story-image"
              />
              <p className="p-section-paragraph">
                Welcoming a newborn into the world is a joyous occasion, yet it
                signifies the start of a challenging journey for new mothers.
                UpTodd is proud to announce its partnership with the Instagram
                MOM Influencer Swapnil, owner of instagram handle
                coco__and_mommy. Together, we embark on a mission to support and
                guide new mothers in establishing a solid foundation for their
                babies’ first three years of life.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">
                Meet Our Official Partner Ambassador, MOM Influencer Swapnil
              </h1>
              <p className="p-section-paragraph">
                Swpanil is a prominent influencer deeply committed to supporting
                new mothers across different stages. As our official partner
                ambassador, Swpanil plays a crucial role in guiding mothers
                through the early challenges of motherhood. His expertise and
                influence perfectly align with our shared vision of creating a
                better world for the next generation. Together, we are committed
                to offering a bright start to their lives through informed and
                compassionate parenting.
              </p>
              <p className="p-section-paragraph">
                UpTodd’s Unique Approach: At UpTodd, we understand the
                importance of those critical early years in a child’s
                development. Our approach is meticulously curated, leveraging
                insights from 10,000+ research papers and collaborations with
                experts from MIT, Stanford, IITs, and AIIMS. This ensures a
                robust, evidence-based foundation for our programs.
              </p>
            </div>

            <div className="p-content-section">
              <h1 className="p-section-title">
                Our program integrates techniques from globally recognized
                methodologies, including:
              </h1>
              <ol>
                <li>
                  <p className="p-section-paragraph">
                    Early stimulation from Glenn Doman.
                  </p>
                </li>
                <li>
                  <p className="p-section-paragraph">
                    Montessori’s emphasis on independence and exploration.
                  </p>
                </li>
                <li>
                  <p className="p-section-paragraph">
                    Howard Gardner’s theory of multiple intelligences from
                    Harvard University.
                  </p>
                </li>
                <li>
                  <p className="p-section-paragraph">
                    Waldorf’s holistic approach.
                  </p>
                </li>
                <li>
                  <p className="p-section-paragraph">
                    The Reggio Emilia Approach’s focus on creativity.
                  </p>
                </li>
                <li>
                  <p className="p-section-paragraph">
                    Indigenous parenting and mindful parenting.
                  </p>
                </li>
              </ol>
            </div>
            <p className="p-section-paragraph">
              Empowering Babies Worldwide: UpTodd’s holistic approach empowers
              babies globally to flourish and achieve their full potential
              through evidence-based guidance. We integrate best practices from
              diverse educational philosophies, ensuring each child receives a
              personalized and comprehensive learning experience.
            </p>
          </div>
        </main>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
          maxWidth: "1100px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <a
          href="#prev"
          style={{ textDecoration: "none", color: "red", fontSize: "1.3rem" }}
          onClick={(e) => {
            e.preventDefault();
            changeDiv("prev");
          }}
        >
          ← Previous
        </a>{" "}
        <a
          href="#next"
          style={{ textDecoration: "none", color: "red", fontSize: "1.3rem" }}
          onClick={(e) => {
            e.preventDefault();
            changeDiv("next");
          }}
        >
          Next →
        </a>
      </div>

      <CommentForm />

      <BlogFooter />
    </div>
  );
}

export default ParentingStories;
