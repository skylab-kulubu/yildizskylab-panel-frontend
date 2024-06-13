"use strict";
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 2210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ addProjectValidations),
/* harmony export */   "L3": () => (/* binding */ addEventValidations),
/* harmony export */   "f2": () => (/* binding */ loginValidations),
/* harmony export */   "fb": () => (/* binding */ applyTeamValidations),
/* harmony export */   "s4": () => (/* binding */ applyQuestions),
/* harmony export */   "wY": () => (/* binding */ addTeamValidations)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8952);

const loginValidations = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(8)
});
const addProjectValidations = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required(),
    description: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required()
});
const addTeamValidations = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    teamName: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required(),
    description: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required(),
    photoURL: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().url().required()
});
const addEventValidations = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required(),
    description: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required(),
    // date formatı yapmadım
    date: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required(),
    location: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required(),
    teams: yup__WEBPACK_IMPORTED_MODULE_0__/* .array */ .IX().of(yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_()).required()
});
const requiredQuestion = yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required();
const applyTeamValidations = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    teams: yup__WEBPACK_IMPORTED_MODULE_0__/* .array */ .IX().of(yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_()).required().min(1).max(2),
    0: requiredQuestion,
    1: requiredQuestion,
    2: requiredQuestion,
    3: requiredQuestion,
    4: requiredQuestion,
    5: requiredQuestion,
    6: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_()
});
const applyQuestions = [
    {
        title: "Kendİnİ Nasıl Bİrİ Olarak Tanımlarsın?",
        substring: ""
    },
    {
        title: "İLGİLENDİĞİN ALANLAR NELERDİR?",
        substring: "(Makine \xd6ğrenmesi, Backend Geliştirme, Siber G\xfcvenlik ...)"
    },
    {
        title: "BİLDİĞİN VEYA \xd6ĞRENMEKTE OLDUĞUN TEKNOLOJİLER NELERDİR?",
        substring: "(C, Java, Python, Javascript, Linux ...)"
    },
    {
        title: "En SevdİĞİn İ\xe7ecek?",
        substring: ""
    },
    {
        title: "En Sevdİğİn Atıştırmalık?",
        substring: ""
    },
    {
        title: "SKYLAB Bİr Hamur Olsa Bu Hamurdan Ne Yapardın?",
        substring: ""
    },
    {
        title: "Eklemek İstedİğİn Bir Şey Var Mı?",
        substring: ""
    }
];


/***/ })

};
;