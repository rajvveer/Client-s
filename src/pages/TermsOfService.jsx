import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen" style={{ background: 'var(--t-bg)', color: 'var(--t-text)' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-navy font-bold text-xs tracking-wider uppercase mb-6 shadow-sm shadow-gold/20">Legal Information</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                        <span className="t-text">Terms &amp; </span><span className="text-gradient-gold">Conditions</span>
                    </h1>

                    <div className="space-y-8 text-base md:text-lg leading-relaxed t-text-muted">
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Terms and Conditions for Online Payments</h2>
                            <div className="space-y-4">
                                <p>The Client should make the online payment directly and not through any third party. Caspia North Overseas and its associated companies hereinafter referred to as "Caspia North Overseas" will not be responsible for any loss / liability arising out of disclosure of debit card/credit card or bank account details to any third party by the Client during the process of payment. Where it gets difficult for the client to make the payment, a third party can make the payment on behalf of the client. In that case both the client and the third party will be bound by the additional terms mentioned in the Declaration attached herewith.</p>

                                <p>The records of the Company, computerized or otherwise, on the payments shall be accepted as conclusive evidence of the genuineness and accuracy and binding for all the purposes, and can be used as evidence in any legal proceedings or otherwise.</p>

                                <p>The online payment facility is dependent on the performance/speed of the Server and related IT infrastructure of the service provider and respective bank. Caspia North Overseas does not guarantee their server uptime and transaction success time. Caspia North Overseas shall not be responsible for the success or failure of the transaction. However, in case of double charge made due to technical problem/issue, Caspia North Overseas will refund to the extent of second repeated charge without interest or any other levy.</p>

                                <p>The client shall be held solely responsible for the transaction executed. The client should not share the confidential information related to Credit Card / Debit Card / Internet Banking / Cash Card with anyone. Caspia North Overseas will not be responsible for any misuse of the said information for fraudulent purposes. The IP address of the client will be tracked by Caspia North Overseas. Any misuse of the payment gateway with fraudulent intent will be liable to penal action by Caspia North Overseas.</p>

                                <p>The client should ensure that their account is adequately funded to ensure transaction success. Any charge / levy by the service provider/bank on account of unsuccessful transaction due to inadequate funds in the clients account will be recoverable from the client.</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Limitation of Liability</h2>
                            <div className="space-y-4">
                                <p>Caspia North Overseas will not, in any way, be responsible for any damage or loss caused to client as a result of financial transaction on the Caspia North Overseas website. Caspia North Overseas would also not be responsible or liable in any manner for fraudulent use/misuse of the Client's Credit Card / Debit Card / Internet Banking / Cash Card by a third party.</p>

                                <p>Caspia North Overseas would not be responsible or liable in any manner for any error or defects that may exist or for any costs, loss of profits or consequential losses that may arise from the client's use of or inability to use, or success or failure, suspension or withdrawal, of all or part of the services at any time.</p>

                                <p>Caspia North Overseas will not accept any liability or responsibility for loss of data or breach of confidentiality, or other consequences, howsoever occurring. However, Caspia North Overseas would assist the customer in recovering the amount, provided the above losses have been caused to the customer for reasons other than their own fraudulent act/mistake/misuse.</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Reversal of Charges</h2>
                            <p>In case there has to be a reversal of charges paid online, it would be entirely dependent on the payment gateway's terms and conditions and Caspia North Overseas would not be held responsible or liable in any manner for any delay in reversal of the charges.</p>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Payment Gateway Terms</h2>
                            <p>All payments made shall be dependent on the terms and conditions of the payment gateways / banks. The client understands that by using this service, he explicitly agrees to be bound by the terms and conditions of the payment gateway and the banks, and will not hold Caspia North Overseas responsible for any default in compliance of the same.</p>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Modifications &amp; General Terms</h2>
                            <div className="space-y-4">
                                <p>Caspia North Overseas may from time to time make alterations, additions or deletions, to these terms and conditions which shall be agreeable to the Client and take effect from such date as may be intimated by Caspia North Overseas.</p>

                                <p>The Client shall not use these services for any purpose that is unlawful or prohibited by these terms and conditions. The Client shall take all necessary precautions to prevent unauthorized and illegal use of the services and shall not disclose the details of his/her Credit Card / Debit Card / Internet Banking / Cash Card to any other person to prevent its unauthorized use.</p>

                                <p>Due to operational difficulties, Caspia North Overseas may decide to suspend or terminate the services. The Client shall be responsible for any transactions made through the services until time of such termination.</p>

                                <p>These terms must be read in conjunction with the terms and conditions mentioned in the Contract signed by the client with Caspia North Overseas.</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading mb-4 t-text">Governing Law &amp; Jurisdiction</h2>
                            <div className="space-y-4">
                                <p>These terms shall be governed by all the applicable laws in India.</p>
                                <p>Any disputes arising out of these will be falling in the jurisdiction of the courts in Kharar, Punjab, India.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
