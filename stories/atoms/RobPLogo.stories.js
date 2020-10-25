import RobPLogo from  '../../components/atoms/robp-logo/macro.njk';
import nunjucks from 'nunjucks';

export default {
	title: 'Atoms/RobP Logo',
	argTypes: {
		className: { control: 'text' }
	}
};

const Template = ({ label }) => {
	return RobPLogo({ label });
	// return nunjucks.render('/components/atoms/robp-logo/template.njk', { label });
};

const HTMLTemplate = ({ label }) => {
	return nunjucks.render(RobPLogo({ label }));
};

const NunjucksTemplate = ({ label }) => {
	return 'nunjucks template coming soon';
};

export const TestLogo = Template.bind({});
TestLogo.args = {
	className: 'hello-robp'
};
