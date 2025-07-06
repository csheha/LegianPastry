import React from "react";
import githubicon from "../assets/githubicon.svg";
import "../styles/DevelopersSection.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import member01 from "../assets/members/member01.jpg";
import member02 from "../assets/members/member02.jpg";

export default function DevelopersSection() {
  const navigate = useNavigate();

  return (
    <>
      <div id="developerteam" className="developmentSection">
        <div className="development-container">
          <div className="development-section-title">
            <div className="development-content">
              <div className="development-section-subcontent">
                <div className="development-heading-part1 ">Meet Our</div>
                <div className="development-heading-part2 ">
                  Development Team
                </div>
                <div className="development-text">
                  Driven by passion and creativity, we collaborate closely to
                  design and deliver impactful, user-friendly solutions with
                  dedication and teamwork.
                </div>
              </div>
            </div>
          </div>
          <div className="development-team-box">
            <div className="development-team">
              <div className="member-card" data-aos="fade-up">
                <div>
                  <img className="member-img" src={member01} alt="img" />
                </div>
                <div className="membercontent">
                  <div className="member-about">
                    <div className="member-name">Thakshila Prasadanee</div>
                    <div className="member-job">Full Stack Developer</div>
                  </div>
                </div>
                <div className="team-member-social-icons">
                  <div
                    className="dev-linkden"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/thakshila-prasadanee-0679a028b/",
                        "_blank"
                      )
                    }
                  >
                    <LinkedInIcon />
                  </div>
                  <div
                    className="dev-X"
                    onClick={() =>
                      window.open("https://wa.me/94715139196", "_blank")
                    }
                  >
                    <WhatsAppIcon />
                  </div>
                  <div
                    className="dev-github"
                    onClick={() =>
                      window.open(
                        "https://github.com/Thakshila-Prasadanee/Thakshila-Prasadanee",
                        "_blank"
                      )
                    }
                  >
                    <GitHubIcon />
                  </div>
                </div>
              </div>
              {/* next */}
              <div data-aos="fade-up" className="member-card">
                <div>
                  <img className="member-img" src={member02} alt="img" />
                </div>
                <div className="membercontent">
                  <div className="member-about">
                    <div className="member-name">Chanudi Shehani</div>
                    <div className="member-job">Full Stack Developer</div>
                  </div>
                </div>
                <div className="team-member-social-icons">
                  <div
                    className="dev-linkden"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/chanudi-shehani/",
                        "_blank"
                      )
                    }
                  >
                    <LinkedInIcon />
                  </div>
                  <div
                    className="dev-X"
                    onClick={() =>
                      window.open("https://wa.me/94721585594", "_blank")
                    }
                  >
                    <WhatsAppIcon />
                  </div>
                  <div
                    className="dev-github"
                    onClick={() =>
                      window.open("https://github.com/csheha", "_blank")
                    }
                  >
                    <GitHubIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
