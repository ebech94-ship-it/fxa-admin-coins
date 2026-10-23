
export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Introduction",
      paragraphs: [
        'FX ARENA: Demo Trading ("the App", "we", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, store, use, and safeguard your information when you use our mobile application.',
      ],
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        `We may collect the following information when you use the App:
• Account details, such as your name and email address
• Optional profile information, such as your profile image or bio
• Virtual coin balances and reward records
• Simulated trading activity and tournament performance data, including scores and win/loss records
• Referral and leaderboard information
• Technical information needed to operate and troubleshoot the App
• Information you choose to provide when contacting support`,
      ],
    },
    {
      title: "3. How We Use Your Information",
      paragraphs: [
        `We use your information to:
• Provide access to tournaments and gameplay features
• Maintain virtual coin balances and reward records
• Improve app functionality and performance
• Personalize the user experience
• Maintain fair gameplay and enforce our rules
• Manage eligible referrals and tournament results
• Communicate important updates and notifications`,
      ],
    },
    {
      title: "4. Data Storage & Security",
      paragraphs: [
        "We take reasonable steps to protect your information against unauthorized access, misuse, loss, or alteration. Account and gameplay information may be stored using cloud infrastructure and authentication services. No method of electronic storage can be guaranteed to be completely secure.",
      ],
    },
    {
      title: "5. Sharing Your Information",
      paragraphs: [
        `We do not sell, rent, or trade your personal information. Information may be shared in these limited circumstances:
• When required by law
• To protect the rights and safety of users
• To enforce our Terms & Conditions
• With service providers necessary to operate and maintain the App, such as authentication and cloud hosting services`,
      ],
    },
    {
      title: "6. Use of Synthetic Charts",
      paragraphs: [
        "The candles and charts in this App are simulated and do not represent actual market data. The App provides simulated trading for gameplay and competition purposes and does not execute real financial-market trades.",
      ],
    },
    {
      title: "7. User Rights",
      paragraphs: [
        `Subject to applicable law, you may request to:
• Delete your account
• Correct inaccurate information
• Request information about the personal data we hold`,
      ],
    },
    {
      title: "8. Account Deletion",
      paragraphs: [
        "Users can request account deletion through the available account settings or by contacting support. Account data will be deleted or retained only where required by law or necessary for legitimate security and operational purposes.",
      ],
    },
    {
      title: "9. Cookies & Tracking",
      paragraphs: [
        "The App may process technical information necessary for its functionality, security, and troubleshooting. Any analytics or tracking practices used will depend on the services actually implemented in the App.",
      ],
    },
    {
      title: "10. Children's Privacy",
      paragraphs: [
        "The App is intended for users aged 18 and above. We do not knowingly collect personal information from children below the applicable legal age.",
      ],
    },
    {
      title: "11. App Services",
      paragraphs: [
        "The App provides simulated trading, virtual coins, tournament participation, leaderboards, and eligible virtual coin rewards. Virtual coins are in-app units with no cash value and cannot be withdrawn or redeemed for real money.",
        "The App may use authentication and cloud storage services to maintain accounts and gameplay information. Information handled by those services is subject to their applicable privacy policies.",
      ],
    },
    {
      title: "12. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy periodically to reflect changes to the App or applicable requirements. The latest version will display its updated date.",
      ],
    },
    {
      title: "13. Contact Us",
      paragraphs: [
        "For concerns regarding this Privacy Policy, visit the Help Center within the App or contact us at ebech@republic.beauty.",
      ],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ccc",
        padding: "32px 20px 60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <article
        style={{
          maxWidth: 850,
          margin: "0 auto",
          lineHeight: 1.7,
          whiteSpace: "pre-line",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: 32, marginBottom: 6 }}>
          FX ARENA — Privacy Policy
        </h1>

        <p style={{ color: "#aaa", marginBottom: 28 }}>
          Last Updated: October 2026
        </p>

        {sections.map((section) => (
          <section key={section.title} style={{ marginBottom: 24 }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 20,
                marginBottom: 8,
              }}
            >
              {section.title}
            </h2>

            {section.paragraphs.map((paragraph, index) => (
              <p key={index} style={{ margin: "8px 0" }}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <hr style={{ borderColor: "#333", marginTop: 32 }} />

        <p style={{ color: "#888", fontSize: 13 }}>
          © 2026 GodSpeed (GS) Technologies. All rights reserved.
        </p>
      </article>
    </main>
  );
}
