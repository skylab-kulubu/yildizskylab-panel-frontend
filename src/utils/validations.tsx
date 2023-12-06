import * as yup from 'yup';

export const loginValidations = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(8),
});

export const addProjectValidations = yup.object().shape({
	name: yup.string().required(),
	description: yup.string().required(),
});

export const addTeamValidations = yup.object().shape({
	teamName: yup.string().required(),
	description: yup.string().required(),
	photoURL: yup.string().url().required(),
});

export const addEventValidations = yup.object().shape({
	name: yup.string().required(),
	description: yup.string().required(),
	// date formatı yapmadım
	date: yup.string().required(),
	location: yup.string().required(),
	teams: yup.array().of(yup.string()).required(),
});

const requiredQuestion = yup.string().required();
export const applyTeamValidations = yup.object().shape({
  teams: yup.array().of(yup.string()).required().min(1).max(2),
  0: requiredQuestion,
  1: requiredQuestion,
  2: requiredQuestion,
  3: requiredQuestion,
  4: requiredQuestion,
  5: requiredQuestion,
  6: yup.string(),
});
export const applyQuestions = [
  {
    title: 'Kendİnİ Nasıl Bİrİ Olarak Tanımlarsın?',
    substring: '',
  },
  {
    title: 'İLGİLENDİĞİN ALANLAR NELERDİR?',
    substring: '(Makine Öğrenmesi, Backend Geliştirme, Siber Güvenlik ...)',
  },
  {
    title: 'BİLDİĞİN VEYA ÖĞRENMEKTE OLDUĞUN TEKNOLOJİLER NELERDİR?',
    substring: '(C, Java, Python, Javascript, Linux ...)',
  },
  {
    title: 'En SevdİĞİn İçecek?',
    substring: '',
  },
  {
    title: 'En Sevdİğİn Atıştırmalık?',
    substring: '',
  },
  {
    title: 'SKYLAB Bİr Hamur Olsa Bu Hamurdan Ne Yapardın?',
    substring: '',
  },
  {
    title: 'Eklemek İstedİğİn Bir Şey Var Mı?',
    substring: '',
  },
];
