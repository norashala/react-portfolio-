import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear errors when the user starts typing
        if (formErrors[name]) {
            setFormErrors((prev) => ({
                ...prev,
                [name]: null,
            }));
        }
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!validateEmail(formData.email)) {
            errors.email = "Email is invalid.";
        }
        if (!formData.message) errors.message = "Message is required.";

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form Data:", formData);
            // Here you would typically handle the form submission, e.g., sending data to a server
        }
    };

    return (
        <div className="text-lightGold p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                        required
                    />
                    {formErrors.name && (
                        <p className="text-red-500">{formErrors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                        required
                    />
                    {formErrors.email && (
                        <p className="text-red-500">{formErrors.email}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg">
                        Message:
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                        required
                    />
                    {formErrors.message && (
                        <p className="text-red-500">{formErrors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 rounded bg-magenta text-white font-bold hover:text-diamond"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
