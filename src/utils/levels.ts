const LEVELS = [
	{
		label: 'سابعة أساسي',
		value: '7',
	},
	{
		label: 'ثامنة أساسي',
		value: '8',
	},
	{
		label: 'تاسعة أساسي',
		value: '9',
	},
	{
		label: 'أولى ثانوي',
		value: '1',
	},
	{
		label: 'ثانية ثانوي',
		value: '2',
	},
	{
		label: 'ثالثة ثانوي',
		value: '3',
	},
	{
		label: 'بكالوريا',
		value: '4',
	},
];
const BRANCHES: { [key: string]: any } = {
	'4': [
		{
			label: 'رياضيات',
			value: 'math',
		},
		{
			label: 'اقتصاد والتصرف',
			value: 'echo',
		},
		{
			label: 'علوم التجريبية',
			value: 'sci',
		},
		{
			label: 'اداب',
			value: 'arts',
		},
		{
			label: 'علوم التقنية',
			value: 'tech',
		},
		{
			label: 'إعلامية',
			value: 'info',
		},
		{
			label: 'رياضة',
			value: 'sport',
		},
	],
	'3': [
		{
			label: 'رياضيات',
			value: 'math',
		},
		{
			label: 'علوم تجريبية',
			value: 'sci',
		},
		{
			label: 'علوم التقنية',
			value: 'tech',
		},
		{
			label: 'إعلامية',
			value: 'info',
		},
		{
			label: 'اقتصاد وتصرف',
			value: 'echo',
		},
		{
			label: 'آداب',
			value: 'arts',
		},
	],
};

export const getLevelBranch = (level: string, branch: string) => {
	console.log(level, branch);
	const levelName = LEVELS.find(l => level === l.value)?.label;
	if (!levelName) return level;
	const branches = BRANCHES[level];
	if (!branches) return levelName;
	const branchName = branches.find((b: any) => branch === b.value)?.label;
	if (!branchName) return levelName;
	return `${levelName} ${branchName}`;
};
