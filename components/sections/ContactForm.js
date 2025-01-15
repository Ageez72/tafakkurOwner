"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useId } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? 'white' : '#817ea8',
        backgroundColor: state.isFocused ? '#00A78F' : 'white',
    }),
};

export default function ContactForm({ noPaddingBottom, smPB }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const subjectOptions = [
        { value: 'parents-programs', label: "البرامج التدريبية للآباء والأمهات - عن بعد" },
        { value: 'courses', label: "دورات تفكر مع أنوس للأبناء - عن بعد" },
        { value: 'educational-institution', label: "تطبيق منهاج تفكر مع أنوس في مؤسسة تعليمية" },
        { value: 'versions', label: "إصدارات الأسرة وقصص الأطفال" },
        { value: 'trainning-programs', label: "البرامج التدريبية للكوادر التعليمية" },
        { value: 'other', label: "غير ذلك" },
    ];
    const [selectedSubject, setSelectedSubject] = useState('');
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            subject: "",
            message: '',
            otherComment: ''  // Add this field
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(translation.contact_name_required),
            phone: Yup.number().required(translation.contact_phone_required),
            email: Yup.string().email(translation.contact_email_invalid).required(translation.contact_email_required),
            subject: Yup.string().required(translation.contact_subject_required),
            message: Yup.string().required(translation.contact_message_required),
            otherComment: Yup.string().when('subject', {
                is: 'other',
                then: (schema) => schema.required(translation.contact_other_comment_required),
                otherwise: (schema) => schema.notRequired()
            })
        }),
        onSubmit: (values) => {
            const myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Accept-Language", state.LANG);
        
            const formdata = new FormData();
            formdata.append("name", values.name);
            formdata.append("phone", values.phone);
            formdata.append("email", values.email);
            formdata.append("subject", values.subject);
            formdata.append("msg", values.message);
            if (values.subject === 'other') {
                formdata.append("otherComment", values.otherComment);
            }
        
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
        
            fetch(`${state.HTTP_URL}contact`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    setMessage("لقد تم ارسال رسالتك بنجاح!");
                    setMessageType("success");
                    formik.resetForm();
                    setSelectedSubject(''); // Reset the select value to empty
                })
                .catch((error) => {
                    setMessage("حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.");
                    setMessageType("error");
                    formik.resetForm();
                    setSelectedSubject(''); // Reset the select value to empty
                });
        }
               
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} id="contact-form" className={`contact-form-items ${noPaddingBottom && "pb-0"} ${smPB && "sm-padding"}`}>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                name="name"
                                {...formik.getFieldProps('name')}
                                placeholder={translation.contact_name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="error">{formik.errors.name}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="text"
                                name="email"
                                className="en-txt"
                                {...formik.getFieldProps('email')}
                                placeholder={translation.contact_email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                            <i className="fa-solid fa-phone"></i>
                            <PhoneInput
                            name="phone"
                            value={formik.values.phone}
                            onChange={(value) => formik.setFieldValue('phone', value)}
                            onBlur={() => formik.setFieldTouched('phone', true)}
                            defaultCountry="SA"
                            international
                            className="en-txt"
                            placeholder={translation.contact_phone}
                        />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="error">{formik.errors.phone}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp select-field" data-wow-delay=".5s">
                        <div className="form-clt">
                            <i className="fa-solid fa-list"></i>
                            <Select
                                name="subject"
                                options={subjectOptions}
                                styles={customStyles}
                                value={subjectOptions.find(option => option.value === selectedSubject) || null} // Handle empty value
                                onChange={option => {
                                    formik.setFieldValue('subject', option ? option.value : '');
                                    //formik.setFieldTouched('subject', true); // Mark field as touched for validation
                                    setSelectedSubject(option ? option.value : '');
                                }}
                                placeholder={translation.contact_subject}
                                instanceId={useId()}
                            />
                             {formik.touched.subject && formik.errors.subject ? (
                                <div className="error">{formik.errors.subject}</div>
                            ) : null}
                        </div>
                    </div>
                    {selectedSubject === 'other' && (
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="form-clt">
                                <i className="fa-solid fa-comment"></i>
                                <input
                                    type="text"
                                    name="otherComment"
                                    {...formik.getFieldProps('otherComment')}
                                    placeholder={translation.write_subject}
                                />
                                {formik.touched.otherComment && formik.errors.otherComment ? (
                                    <div className="error">{formik.errors.otherComment}</div>
                                ) : null}
                            </div>
                        </div>
                    )}
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="form-clt">
                            <div className="d-flex align-items-center gap-2 message-wrap">
                                <i className="fa-solid fa-message position-static"></i>
                                <span>{translation.contact_message}</span>
                            </div>

                            <textarea
                                name="message"
                                {...formik.getFieldProps('message')}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="error">{formik.errors.message}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                        <button type="submit" className="hover-btn">
                            {translation.send_message_btn}
                        </button>
                    </div>
                </div>
                {/* Message Box */}
                {message && (
                    <div className={`message-box ${messageType}`}>
                        {message}
                    </div>
                )}
            </form>
        </>
    );
}
