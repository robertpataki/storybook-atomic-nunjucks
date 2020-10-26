import RobPLogo from  '../../components/atoms/robp-logo/macro.njk';
import nunjucks from 'nunjucks';

export default {
	title: 'Design System/Components/Atoms/RobP Logo',
	argTypes: {
		className: { control: 'text' }
	}
};

const Template = ({ className }) => {
	return RobPLogo({ className });
	// return nunjucks.render('/components/atoms/robp-logo/template.njk', { className });
};

const HTMLTemplate = ({ className }) => {
	return nunjucks.render(RobPLogo({ className }));
};

const NunjucksTemplate = ({ className }) => {
	return 'nunjucks template coming soon';
};

export const TestLogo = Template.bind({});
TestLogo.args = {
	className: 'hello-robp'
};
