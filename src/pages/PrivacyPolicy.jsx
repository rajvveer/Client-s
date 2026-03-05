import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen" style={{ background: 'var(--t-bg)', color: 'var(--t-text)' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-xs tracking-wider uppercase mb-6 shadow-sm shadow-gold/20">Legal Information</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                        <span className="t-text">Privacy </span><span className="text-gradient-gold">Policy</span>
                    </h1>

                    <div className="space-y-8 text-base md:text-lg leading-relaxed t-text-muted">
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Introduction</h2>
                            <p>At Caspia North Overseas, we respect and protect your privacy. We operate under a complete data protection policy, thereby protecting your credentials at all levels. This assures absolute confidentiality. Our privacy policy helps us as an organization to meet the needs of the applicants. Your use of our website or any of the services offered therein is subject to the following privacy policy. Your use of our website and any associated services offered through Caspia North Overseas constitutes your acceptance of these terms, including future amendments made thereto.</p>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">1. How We Collect, Store &amp; Protect Your Data</h2>
                            <div className="space-y-4">
                                <p>Caspia North Overseas collects two types of information from the candidate: i) information that the candidate voluntarily provides to us (e.g. through a voluntary registration process, sign-ups or emails); and ii) information that is derived through automated tracking mechanisms.</p>

                                <p>We may also collect personally identifiable information when you choose to use certain other features of the Site, which may include:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Making payment</li>
                                    <li>Consenting to receive our e-newsletter</li>
                                    <li>Filling the assessment form</li>
                                    <li>Commenting on blogs, and others</li>
                                </ul>
                                <p>When you choose to use these additional features, we require you to provide your contact information.</p>

                                <p>Our immigration consultants gather specific credentials of prospective individuals seeking immigration under various programs. It is important to note that during a profile assessment, we by no intention collect any card information. Upon submitting your Immigration Assessment form you can expect your results to be delivered to the email address you have provided to us within 24 hours from the time of submission. Thereafter, we may send follow-up emails to the same email address regarding your immigration inquiry.</p>

                                <p>Once we determine the complete eligibility of an individual for a specific visa category, there is a payment required for registration. Only after you are thorough with the entire details and agree to proceed ahead with the further processing of your visa application do we require you to enter into a contract with us through registration. At the time of your registration, you are required to provide us with your card details as per your convenience. It is highly important for each user to understand that we by no means store card details of any nature nor do we share the details with third parties.</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">2. How We Use Your Information</h2>
                            <div className="space-y-4">
                                <p>All the information provided during a visa assessment is used to help ascertain and understand the eligibility for a specific category the applicant is interested in. The contact details are recorded and used to connect with the users as per their convenience. Your personal information will not be disclosed, used, sold or otherwise transferred to unaffiliated third parties for any purposes other than to our associates and other third parties who need to know in order to provide services to you unless required to do so by law.</p>

                                <p>We may, however, share non-personal and anonymous information, such as domain name and IP address, the web pages visited, date and time of the page request, the referring web site (if any) and other parameters in the URL with trusted third parties.</p>

                                <p>This is collected in order to better understand our website usage, and enhance the performance of services to maintain and operate the Site and certain features on the Site. Also, we may share personally identifiable or other information with our parent, subsidiaries, divisions, and affiliates.</p>

                                <p>We may disclose contact information in special cases where we have reason to believe that disclosing this information is necessary to identify, contact or bring legal action against someone who may be violating our terms and conditions of use or may be causing injury or interference with our rights, property, our customers or anyone who could be harmed by such activities.</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">3. How We Protect Your Information</h2>
                            <div className="space-y-4">
                                <p>We are committed to protecting the information we receive from you. We take appropriate security measures to protect your information against unauthorized access to or unauthorized alteration, disclosure or destruction of data. To prevent unauthorized access, maintain data accuracy, and ensure the correct use of information, we maintain appropriate physical, electronic, and managerial procedures to safeguard and secure the information and data stored on our system. While no computer system is completely secure, we believe the measures we have implemented reduce the likelihood of security problems to a level appropriate to the type of data involved.</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Disclaimer to Security</h2>
                            <p>By consenting to the Terms and Conditions of the Site and hence the Privacy Policy, you consent that no data transmission over the Internet is completely secure. We cannot guarantee or warrant the security of any information you provide to us and you transmit such information to us at your own risk.</p>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Notification of Changes</h2>
                            <p>We reserve the right to change this Privacy Policy from time to time at its sole discretion. If at some point in the future, there is a change to our Privacy Policy, unless we obtain your express consent, such change will only apply to information collected after the revised Privacy Policy took effect. Your continued use of the Site indicates your assent to the Privacy Policy as posted.</p>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Contact Information</h2>
                            <p>If you have any questions or concerns regarding this Privacy Policy, please contact Caspia North Overseas through the contact information provided on our website.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
