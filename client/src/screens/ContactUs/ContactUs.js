import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import FieldController from '@components/FieldController/FieldController';
import useContactUs from './useContactUs';

const ContactUs = () => {
  const { control, handleSubmit, onSubmit } = useContactUs();

  return (
    <>
      <Breadcrumb text={'Contact Us'} />
      <>
        <div className="contact-area mb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="contact-info">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Address: </span>
                      Toronto, Ontario
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <span>Phone: </span>
                      (800) 0123 4567 890
                    </li>
                    <li>
                      <i className="fa fa-mobile" />
                      <span>Email: </span>
                      <a href="#">demo@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="contact-form">
                  <h3>
                    <i className="fa fa-envelope-o" />
                    Leave a Message
                  </h3>
                  <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-lg-12">
                        <FieldController
                          control={control}
                          name="phone"
                          type="text"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-lg-12">
                        <FieldController
                          control={control}
                          name="message"
                          type="textarea"
                          placeholder="Message"
                          rows={5}
                        />
                        <button className="submit" type="submit">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact-area-end */}
      </>
    </>
  );
};

export default ContactUs;
