'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    email: '',
    grantType: 'education',
    organization: '',
    amount: '',
    purpose: '',
    background: '',
    qualifications: '',
    impact: ''
  });

  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateLetter = () => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const grantTypeText = {
      education: 'Educational Grant',
      business: 'Small Business Development Grant',
      personal: 'Personal Development Grant'
    };

    const letter = `${formData.fullName}
${formData.address}
${formData.city}, GA ${formData.zipCode}
${formData.phone}
${formData.email}

${date}

${formData.organization}
Grant Review Committee
Georgia

Dear Grant Review Committee,

RE: Application for ${grantTypeText[formData.grantType]}

I am writing to formally submit my application for the ${grantTypeText[formData.grantType]} program. As a dedicated resident of Georgia, I am committed to leveraging this opportunity to achieve meaningful outcomes that will benefit both my personal development and our community.

PROJECT OVERVIEW AND PURPOSE

${formData.purpose}

The funding amount of $${formData.amount} will be allocated strategically to ensure maximum impact and sustainable results. I have developed a comprehensive implementation plan with clear milestones and measurable outcomes.

BACKGROUND AND QUALIFICATIONS

${formData.background}

${formData.qualifications}

My track record demonstrates responsibility, dedication, and the capacity to successfully complete this initiative. I have carefully researched best practices and consulted with mentors to ensure a solid foundation for success.

COMMUNITY IMPACT AND SUSTAINABILITY

${formData.impact}

This project aligns with Georgia's economic development priorities and will contribute to the broader goals of workforce development, economic growth, and community enhancement. I am committed to measuring outcomes and providing regular progress reports to demonstrate accountability and responsible stewardship of grant funds.

FINANCIAL RESPONSIBILITY

I have prepared a detailed budget that allocates every dollar purposefully. The requested funding represents only what is essential to achieve the stated objectives. I am also exploring matching funds and in-kind contributions to maximize the value of your investment.

I understand the competitive nature of grant funding and the importance of demonstrating both need and capability. I am prepared to provide any additional documentation, undergo interviews, and meet all compliance requirements. My commitment to transparency and accountability is unwavering.

CONCLUSION

I respectfully request your favorable consideration of this application. I am confident that your investment will yield significant returns, both in terms of individual achievement and community benefit. I am available at your convenience to discuss this proposal in greater detail and answer any questions.

Thank you for your time, consideration, and dedication to supporting Georgia residents in achieving their goals. I look forward to the opportunity to work with your organization and demonstrate the positive impact of your support.

Respectfully submitted,


${formData.fullName}

Enclosures:
- Supporting documentation
- Budget detail
- References
- Timeline and milestones`;

    setGeneratedLetter(letter);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    alert('Letter copied to clipboard!');
  };

  const downloadLetter = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedLetter], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'grant_application_letter.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Georgia Grant Application Letter Generator</h1>
        <p className={styles.subtitle}>Create a professional grant application letter for Georgia state grants</p>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <h2>Personal Information</h2>

            <div className={styles.formGroup}>
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Street Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Atlanta"
                />
              </div>

              <div className={styles.formGroup}>
                <label>ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="30301"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(404) 555-0100"
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@email.com"
                />
              </div>
            </div>

            <h2>Grant Information</h2>

            <div className={styles.formGroup}>
              <label>Grant Type *</label>
              <select name="grantType" value={formData.grantType} onChange={handleChange}>
                <option value="education">Education</option>
                <option value="business">Starting a Business</option>
                <option value="personal">Personal Development</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Organization/Grant Program Name *</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Georgia Department of Economic Development"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Requested Amount *</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="25,000"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Purpose and Goals (What will you use the grant for?) *</label>
              <textarea
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows="4"
                placeholder="Describe the specific purpose of the grant, your goals, and what you plan to accomplish. Be specific about how the funds will be used."
              />
            </div>

            <div className={styles.formGroup}>
              <label>Background (Your story and why you need this grant) *</label>
              <textarea
                name="background"
                value={formData.background}
                onChange={handleChange}
                rows="4"
                placeholder="Share your background, current situation, and why this grant is important to you. Include any challenges you've overcome or relevant life experiences."
              />
            </div>

            <div className={styles.formGroup}>
              <label>Qualifications (Your skills, experience, and preparation) *</label>
              <textarea
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your relevant skills, education, work experience, and any preparation you've done. Explain why you're capable of succeeding with this grant."
              />
            </div>

            <div className={styles.formGroup}>
              <label>Community Impact (How will this benefit others?) *</label>
              <textarea
                name="impact"
                value={formData.impact}
                onChange={handleChange}
                rows="4"
                placeholder="Explain how your project will benefit your community, create jobs, help others, or contribute to Georgia's economy. Include long-term sustainability plans."
              />
            </div>

            <button className={styles.generateButton} onClick={generateLetter}>
              Generate Professional Letter
            </button>
          </div>

          {generatedLetter && (
            <div className={styles.resultSection}>
              <h2>Your Professional Grant Letter</h2>
              <div className={styles.letterPreview}>
                <pre>{generatedLetter}</pre>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.copyButton} onClick={copyToClipboard}>
                  Copy to Clipboard
                </button>
                <button className={styles.downloadButton} onClick={downloadLetter}>
                  Download as .txt
                </button>
              </div>
              <div className={styles.tips}>
                <h3>Next Steps:</h3>
                <ul>
                  <li>Review the letter carefully and customize any sections as needed</li>
                  <li>Prepare all supporting documents mentioned in the letter</li>
                  <li>Have someone proofread the final version</li>
                  <li>Submit according to the grant's specific requirements</li>
                  <li>Follow up appropriately after submission</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
