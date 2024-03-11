import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactUss = () => {
  return (
    <>
      <div id="site-footer" class="site-footer">
        <div class="content-bottom-widgets">
          <div class="content-bottom-inner wrap">
            <div class="content-bottom-aside-wrap">
              <aside data-width="12">
                <div
                  id="text-6"
                  class="widget-odd widget-last widget-first widget-1 aligncenter cta  widget_text"
                >
                  <h3 class="widget-title first-color">Let’s get started</h3>{" "}
                  <div class="textwidget">
                    <h2 class="no-margin-top second-color">
                      Are you ready for a better, more productive business?
                    </h2>
                    <p>
                      Stop worrying about technology problems. Focus on your
                      business.
                      <br />
                      Let us provide the support you deserve.
                    </p>
                    <p>
                      <Link class="mt_btn_yellow mt_btn_yellow" to="/">
                        Contact us Now
                      </Link>
                    </p>
                  </div>
                </div>{" "}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUss;
