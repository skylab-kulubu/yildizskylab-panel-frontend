"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 5996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].tsx


const authOptions = {
    providers: [
        credentials_default()({
            type: "credentials",
            name: "Credentials",
            credentials: {},
            async authorize (credentials, req) {
                const { email , password  } = credentials;
                // adminUser
                // if (process.env.NEXTAUTH_SECRET === "asdasd") {
                //     if (
                //         email !== "admin@admin.com" ||
                //         password !== "adminadmin"
                //     )
                //         return null;
                //     const userDummy = {
                //         id: "1",
                //         name: "dogu",
                //         email: email,
                //         password: password,
                //         team: "WEBLAB",
                //     };
                //     return userDummy;
                // }
                // login url from .env
                const res = await fetch(process.env.BACKEND_URL + "/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                if (res.status !== 201) return null;
                const { token  } = await res.json();
                const userData = await fetch(process.env.BACKEND_URL + "/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                if (userData.status !== 200) return null;
                const user = await userData.json();
                user.accessToken = token;
                if (res.ok && user) {
                    return user;
                } else return null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt ({ token , user  }) {
            return {
                ...token,
                ...user
            };
        },
        async session ({ session , user , token  }) {
            session.user = token;
            return session;
        }
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5996));
module.exports = __webpack_exports__;

})();