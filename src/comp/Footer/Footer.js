import "./Footer.css";
import Logo from "../../images/logo.svg";
import FooterElement from "./FooterElement";
import LocationSvg from "../../images/icon-location.svg";
import PhoneSvg from "../../images/icon-phone.svg";
import EmailSvg from "../../images/icon-email.svg";
import FooterArray from "./FooterArray";
import FooterSocials from "./FooterSocials";

const Footer = () => {
	const firstList = ["About Us", "Jobs", "Press", "Blog"];
	const secondList = ["Contact Us", "Terms", "Privacy"];

	return (
		<div className="footer">
			<div className="footer_Container">
				<div className="imageFooter">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="footer_Info">
					<FooterElement
						imgLink={LocationSvg}
						text={
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto est dolores vitae! Deserunt sed enim corrupti, inventore quisquam"
						}
					/>
					<div className="footerElement_Column">
						<FooterElement imgLink={PhoneSvg} text="+1-543-123-4567" />
						<FooterElement imgLink={EmailSvg} text="example@fylo.com" />
					</div>
					<FooterArray list={firstList} />
					<FooterArray list={secondList} />
					<FooterSocials />
				</div>
			</div>
		</div>
	);
};

export default Footer;
