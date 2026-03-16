import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Scale, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto text-gray-200">
      <Link
        href="/"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors group"
      >
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
        Back to Home
      </Link>

      <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
        <div className="flex items-center gap-4 mb-8 border-b border-slate-700/50 pb-6">
          <div className="p-3 bg-blue-900/30 rounded-xl">
            <Shield className="w-10 h-10 text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy & Terms</h1>
            <p className="text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
              <Scale className="w-6 h-6 text-blue-400" />
              General Terms
            </h2>
            <ul className="space-y-4 list-disc pl-5 text-slate-300">
              <li>
                <strong className="text-white">Minimum Fee:</strong> A mandatory non-refundable minimum fee of <span className="text-amber-400 font-bold">$10</span> applies to all initial consultations. This fee ensures our experts' time is valued.
              </li>
              <li>
                <strong className="text-white">Service Scope:</strong> Arkhas provides consultation in marketing, social media, programming, and custom business solutions. We reserve the right to decline requests that fall outside our expertise or ethical guidelines.
              </li>
              <li>
                <strong className="text-white">Consultation Channels:</strong> Official consultations are conducted via Email or WhatsApp as agreed upon. We are not responsible for communications outside these verified channels.
              </li>
              <li>
                <strong className="text-white">Response Time:</strong> While we strive to respond within 24 hours, complex queries may require up to 3 business days for a detailed analysis.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
              <FileText className="w-6 h-6 text-blue-400" />
              Data & Privacy
            </h2>
            <ul className="space-y-4 list-disc pl-5 text-slate-300">
              <li>
                <strong className="text-white">Data Collection:</strong> We collect only necessary information (Name, Business Name, Contact Details) to provide our services effectively.
              </li>
              <li>
                <strong className="text-white">Confidentiality:</strong> All client business ideas, strategies, and proprietary information discussed during consultations are kept strictly confidential.
              </li>
              <li>
                <strong className="text-white">Third-Party Sharing:</strong> We do not sell, trade, or rent your personal identification information to others.
              </li>
              <li>
                <strong className="text-white">Platform Usage:</strong> When you provide links to third-party platforms (Instagram, Telegram, etc.), you acknowledge that those platforms have their own privacy policies which we do not control.
              </li>
              <li>
                <strong className="text-white">Data Retention:</strong> We retain project records for a period of 12 months for reference, after which they may be archived or deleted.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
              <Scale className="w-6 h-6 text-blue-400" />
              User Responsibilities
            </h2>
            <ul className="space-y-4 list-disc pl-5 text-slate-300">
              <li>
                <strong className="text-white">Accuracy:</strong> You agree to provide accurate, current, and complete information during the request process.
              </li>
              <li>
                <strong className="text-white">Code of Conduct:</strong> Respectful communication is required. Abusive behavior towards our consultants will result in immediate termination of service without refund.
              </li>
              <li>
                <strong className="text-white">Payment:</strong> All payments must be cleared before the final delivery of detailed strategies or code solutions.
              </li>
              <li>
                <strong className="text-white">Intellectual Property:</strong> Unless agreed otherwise, the final output (code, strategy document) belongs to the client upon full payment, while Arkhas retains the right to use generic methodologies developed.
              </li>
              <li>
                <strong className="text-white">Refund Policy:</strong> Due to the nature of consultation services, fees are generally non-refundable once the consultation has commenced.
              </li>
              <li>
                <strong className="text-white">Policy Updates:</strong> Arkhas reserves the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms.
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50 text-center text-slate-500 text-sm">
          <p>If you have any questions about this Privacy Policy, please contact us at info@arkhas.com.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
