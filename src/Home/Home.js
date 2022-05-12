import React from "react";
import styled from "styled-components";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdWavingHand } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import image1 from "../images/happy0.jpg";
import image2 from "../images/male.jpg";

const Home = () => {
  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <main>
        <section className="main-head">
          <h1>Hello Jane</h1>
          <p>
            How are you doing today? would you like to share something about the
            community 🤗
          </p>
        </section>
        <div className="main-body">
          <h1>Create post</h1>
          <div className="main-body-child">
            <aside>
              <div className="aside-head">
                <BiMessageRoundedDots
                  style={{
                    color: "white",
                    position: "relative",
                    top: "20%",
                    width: "100%",
                    left: "0%",
                    fontSize: "1em",
                  }}
                />
              </div>
              <div className="aside-body">How are you feeling today?</div>
            </aside>
          </div>
          <button className="btn btn-primary" style={{ float: "right" }}>
            Post
          </button>
        </div>
        <article>
          <div className="sasuke">
            <div className="sasuke-head">
              <img src={image1} alt="icon" />
              <div className="sasuke-body">
                <span>Theresa Wobb</span>
                <span>5mins ago</span>
              </div>
            </div>
            <div style={{ color: "#b7bfc9" }}>
              <BsThreeDots />
            </div>
          </div>
          <div className="sector">
            <div className="segment">
              <div className="aside-head">
                <MdWavingHand
                  style={{
                    color: "yellow",
                    position: "relative",
                    top: "20%",
                    width: "100%",
                    left: "0%",
                    fontSize: "1em",
                  }}
                />
              </div>
              <div className="aside-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati molestiae ratione rerum, nulla pariatur ut a tenetur
                incidunt quam illo?
              </div>
            </div>
          </div>
          <div className="comment">
            <BiComment /> 24 comments
          </div>
        </article>
        <article>
          <div className="sasuke">
            <div className="sasuke-head">
              <img src={image2} alt="icon" />
              <div className="sasuke-body">
                <span>Marvin McKinney</span>
                <span>8mins ago. Edited</span>
              </div>
            </div>
            <div>
              <BsThreeDots style={{ color: "#b7bfc9" }} />
            </div>
          </div>
          <div className="sector">
            <div className="segment">
              <div className="aside-head">
                <BsEmojiFrown
                  style={{
                    color: "yellow",
                    position: "relative",
                    top: "20%",
                    width: "100%",
                    left: "0%",
                    fontSize: "1em",
                  }}
                />
              </div>
              <div className="aside-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati molestiae ratione rerum, nulla pariatur ut a tenetur
                incidunt quam illo?
              </div>
            </div>
          </div>
          <div className="comment">
            <BiComment /> 84 comments
          </div>
        </article>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: rgba(41, 51, 69, 1);
  main {
    margin-top: 1em;
    max-width: 980px;
    width: 90%;
    margin: 0 auto;

    .main-head {
      padding: 2em;
      padding-bottom: 0;

      h1 {
        font-size: 2em;
        font-weight: 400px;
        text-transform: capitalize;
        font-family: "Rajdhani", sans-serif;
        letter-spacing: 0.125rem;
        margin-bottom: 0;
        color: #b7bfc9;
      }

      p {
        font-size: 1em;
        width: 70%;
        font-weight: 200px;
        font-family: "Rajdhani", sans-serif;
        letter-spacing: 0.125rem;
        margin-top: 0.3em;
        color: gray;
      }
    }

    .main-body {
      padding: 2em;
      padding-top: 0;
      margin-left: 20px;
      height: 210px;
      width: 80%;
      background: #585c61;
      border-radius: 10px 10px;
      margin-bottom: 10px;

      h1 {
        padding-top: 1em;
        font-size: 1.5em;
        font-weight: 300px;
        text-transform: capitalize;
        font-family: "Rajdhani", sans-serif;
        letter-spacing: 0.125rem;
        margin-bottom: 0;
        color: #b7bfc9;
        margin-bottom: 10px;
      }

      .main-body-child {
        height: 70px;
        width: 100%;
        background: rgba(41, 51, 69, 1);
        border-radius: 10px 10px;
        margin-bottom: 1em;

        aside {
          padding: 0.9em;
          display: grid;
          grid-template-columns: 5% 95%;

          @media screen and (max-width: 1038px) {
            aside {
              grid-template-columns: 10% 90%;
            }
          }

          @media screen and (max-width: 803px) {
            aside {
              grid-template-columns: 20% 80%;
            }
          }

          .aside-head {
            background: gray;
            border-radius: 50%;
            height: 40px;
          }

          .aside-body {
            padding-top: 0.5em;
            font-size: 1em;
            letter-spacing: 0.125em;
            color: #b7bfc9;
            margin-left: 0.7em;
            font-family: "Rajdhani", sans-serif;
          }

          @media screen and (max-width: 803px) {
            .aside-body {
              font-size: 0.8em;
            }
          }
        }
      }
    }

    @media screen and (max-width: 803px) {
      .main-body {
        height: 220px;
      }
    }

    article {
      padding: 2em;
      padding-top: 0;
      margin-left: 20px;
      height: 210px;
      width: 80%;
      background: #585c61;
      border-radius: 10px 10px;
      margin-bottom: 10px;

      .sasuke {
        display: flex;
        justify-content: space-between;

        .sasuke-head {
          margin-top: 0.4em;
          display: flex;
          font-size: 0.9em;
          letter-spacing: 0.125em;
          font-family: "Rajdhani", sans-serif;
          margin-bottom: 1em;
          img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }

          .sasuke-body {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: center;
            margin-left: 0.7em;
            color: #b7bfc9;
          }
        }
      }
      .sector {
        height: 100px;
        width: 100%;
        background: rgba(41, 51, 69, 1);
        border-radius: 10px 10px;
        margin-bottom: 1em;

        .segment {
          padding: 0.9em;
          display: grid;
          grid-template-columns: 5% 95%;

          @media screen and (max-width: 1038px) {
            .segment {
              grid-template-columns: 10% 90%;
            }
          }

          @media screen and (max-width: 803px) {
            .segment {
              grid-template-columns: 20% 80%;
            }
          }

          .aside-head {
            background: gray;
            border-radius: 50%;
            height: 40px;
          }

          .aside-body {
            padding-top: 0.1em;
            font-size: 1em;
            letter-spacing: 0.125em;
            color: #b7bfc9;
            margin-left: 0.7em;
            font-family: "Rajdhani", sans-serif;
          }

          @media screen and (max-width: 803px) {
            .aside-body {
              font-size: 0.8em;
            }
          }
        }
      }
      @media screen and (max-width: 544px) {
        .sector {
          height: auto;
        }
      }

      .comment {
        font-size: 1em;
        letter-spacing: 0.125em;
        font-family: "Rajdhani", sans-serif;
        color: #b7bfc9;
      }
    }

    @media screen and (max-width: 803px) {
      article {
        height: auto;
      }
    }
  }
`;

export default Home;
