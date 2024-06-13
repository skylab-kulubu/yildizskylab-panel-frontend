"use strict";
exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 2511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Modal)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/ui/Modals/TeamModal.tsx


function TeamModal({ closeModal  }) {
    const [memberTags, setMemberTags] = (0,react_.useState)([
        "Dogukan Yalcin",
        "Furkan Kartal",
        "Melih Yelman",
        "Gokdeniz Cakir"
    ]);
    const [projectTags, setProjectTags] = (0,react_.useState)([
        "ARTAM",
        "ARTAM Heavy",
        "AKU",
        "DemirKazik"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "justify-center mt-0 items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1500] outline-none focus:outline-none ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-[90%] sm:w-auto md:w-[60%] my-6 mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-customLightPurple outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center p-3 rounded-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: " mx-auto bg-transparent border-0 text-black float-right text-3xl leading-normal font-semibold outline-none focus:outline-none",
                                    onClick: closeModal,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-12 h-12 hover:bg-gray-300 rounded p-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-center items-center px-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-2 py-4 pt-2 flex flex-wrap rounded-none bg-customLightPink w-full",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DropDownTagInput, {
                                            tags: memberTags,
                                            setTags: setMemberTags
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl w-full py-3 px-2 mb-8 hover:scale-105 hover:bg-customAccent hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bebas",
                                            children: "Uye Guncelle"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-2 py-4 pt-2 flex flex-wrap rounded-none bg-customLightPink w-full",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DropDownTagInput, {
                                            tags: projectTags,
                                            setTags: setProjectTags
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl w-full py-3 px-2 mb-8 hover:scale-105 hover:bg-customAccent hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bebas",
                                            children: "Proje Ekle / Cikar"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ChangeName, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ChangeDescription, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DeleteTeamButton, {
                                        handleDelete: function() {
                                            throw new Error("Function not implemented.");
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-50 fixed inset-0 z-[996] bg-black w-screen h-screen",
                onClick: closeModal
            })
        ]
    });
}
const TagItem = ({ tag , removeTag  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: "flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-sm cursor-pointer bg-customLightPurple text-slate-900 hover:scale-105 transition-all duration-150 ease-in-out ",
        children: [
            tag,
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5 ml-3 hover:text-customLightPink",
                viewBox: "0 0 20 20",
                onClick: removeTag,
                fill: "currentColor",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    clipRule: "evenodd"
                })
            })
        ]
    });
};
const DropDownTagInput = ({ tags , setTags  })=>{
    const [inputValue, setInputValue] = (0,react_.useState)("");
    const [suggestions, setSuggestions] = (0,react_.useState)([]);
    const removeTag = (index)=>{
        const newTags = [
            ...tags
        ];
        newTags.splice(index, 1);
        setTags(newTags);
    };
    const addTag = (tag)=>{
        if (tags.includes(tag)) return;
        setTags([
            ...tags,
            tag
        ]);
        setInputValue("");
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            addTag(inputValue);
            setSuggestions([]);
        } else if (e.key === "Escape") {
            setSuggestions([]);
        }
    };
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
        if (e.target.value.length === 0) setSuggestions([]);
        setSuggestions([
            "Dogukan",
            "Dogukan Yal",
            "Dogukan Yalcin"
        ]);
    };
    const handleSuggestionClick = (tag)=>{
        console.log(tag);
        addTag(tag);
        setSuggestions(suggestions.filter((suggestion)=>suggestion !== tag));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap w-full",
        children: [
            tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx(TagItem, {
                    tag: tag,
                    removeTag: ()=>removeTag(index)
                }, tag)),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "border px-4 py-2 outline-none text-customDarkPurple",
                        value: inputValue,
                        onChange: handleInputChange,
                        onKeyDown: handleKeyDown
                    }),
                    suggestions.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute top-12 bg-customAccent text-customDarkPurple shadow-lg rounded-none z-50 text-xl font-thin whitespace-nowrap",
                        children: suggestions.map((suggestion)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-3 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-900 t",
                                onClick: ()=>handleSuggestionClick(suggestion),
                                children: suggestion
                            }, suggestion))
                    })
                ]
            })
        ]
    });
};
const ChangeName = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[60%] h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "w-full text-left text-xl text-customDarkPurple bg-customLightPink h-full px-4 py-3 rounded-none outline-none"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[40%] h-full ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "w-full items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl py-3 px-2 hover:scale-105 hover:bg-customAccent hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bebas",
                        children: "Ekip Ismini Degistir"
                    })
                })
            })
        ]
    });
};
const ChangeDescription = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col flex-nowrap w-full h-full bg-customLightPink mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    rows: 2,
                    className: "w-full text-left text-xl text-customDarkPurple bg-customLightPink h-full px-4 py-3 rounded-none outline-none "
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "w-full items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl py-3 px-2 hover:scale-105 hover:bg-customAccent hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out whitespace-nowrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bebas",
                        children: "Ekip Aciklamasini Degistir"
                    })
                })
            })
        ]
    });
};
const DeleteTeamButton = ({ handleDelete  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-full",
            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "w-full items-center text-center bg-[#680808] text-customLightPink text-base sm:text-xl py-3 px-2 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-[#9c0b0b] hover:text-customDarkPurple",
                onClick: handleDelete,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-bebas",
                    children: "Ekip Sil"
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/ui/Modals/ProjectModal.tsx

function ProjectModal_TeamModal({ closeModal  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1500] outline-none focus:outline-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-[90%] sm:w-auto my-6 mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-customLightPurple outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center p-3 rounded-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: " mx-auto bg-transparent border-0 text-black float-right text-3xl leading-normal font-semibold outline-none focus:outline-none",
                                    onClick: closeModal,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-12 h-12 hover:bg-gray-300 rounded p-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-center items-center px-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectModal_ChangeName, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectModal_ChangeDescription, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DeleteProjectButton, {
                                        handleDelete: function() {
                                            throw new Error("Function not implemented.");
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-50 fixed inset-0 z-[996] bg-black w-screen h-screen",
                onClick: closeModal
            })
        ]
    });
}
const ProjectModal_ChangeName = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[60%] h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "w-full text-left text-xl text-customDarkPurple bg-customLightPink h-full px-4 py-3 rounded-none outline-none"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[40%] h-full ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "w-full items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl py-3 px-2 hover:scale-105 hover:bg-customAccent hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out whitespace-nowrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bebas",
                        children: "Proje Ismini Degistir"
                    })
                })
            })
        ]
    });
};
const ProjectModal_ChangeDescription = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col flex-nowrap w-full h-full bg-customLightPink mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    rows: 2,
                    className: "w-full text-left text-xl text-customDarkPurple bg-customLightPink h-full px-4 py-3 rounded-none outline-none "
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "w-full items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl py-3 px-2 hover:scale-105 hover:bg-customAccent hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out whitespace-nowrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bebas",
                        children: "Proje Aciklamasini Degistir"
                    })
                })
            })
        ]
    });
};
const DeleteProjectButton = ({ handleDelete  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-full",
            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "w-full items-center text-center bg-[#680808] text-customLightPink text-base sm:text-xl py-3 px-2 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-[#9c0b0b] hover:text-customDarkPurple",
                onClick: handleDelete,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-bebas",
                    children: "Projeyi Sil"
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/ui/Modals/index.tsx




function Modal({ className , text , type  }) {
    const [showModal, setShowModal] = (0,react_.useState)(false);
    const closeModal = ()=>{
        setShowModal(false);
    };
    const currentModal = ()=>{
        switch(type){
            case "team":
                return /*#__PURE__*/ jsx_runtime_.jsx(TeamModal, {
                    closeModal: closeModal
                });
            case "project":
                return /*#__PURE__*/ jsx_runtime_.jsx(ProjectModal_TeamModal, {
                    closeModal: closeModal
                });
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: className,
                onClick: ()=>setShowModal(true),
                children: text
            }),
            showModal && currentModal()
        ]
    });
}


/***/ })

};
;