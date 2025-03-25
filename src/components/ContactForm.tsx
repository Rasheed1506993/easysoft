
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="Your name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block mb-2 text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="Subject of your message"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all h-32 resize-none"
          placeholder="Your message..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all flex justify-center items-center"
      >
        {isSubmitting ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
