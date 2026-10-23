
export default function TermsPage() {
  const sections = [
    {
      title: "1. Purpose of the App",
      paragraphs: [
        "Forex Tournaments Arena (FX ARENA) is an educational trading simulator that allows users to practise simulated trading, develop trading skills, and participate in competitions using virtual trading balances and virtual coins.",
        "The App does not provide real forex trading, brokerage, investment, exchange, asset management, or financial advisory services. All trading activities are simulated and intended for education, skill development, and entertainment.",
      ],
    },
    {
      title: "2. Eligibility",
      paragraphs: [
        "You must be at least 18 years old or meet the applicable legal age requirement in your region to use this App. You agree to use the App only for lawful purposes.",
      ],
    },
    {
      title: "3. Account Registration",
      paragraphs: [
        "You must provide accurate information during registration and are responsible for activities conducted through your account. Keep your login credentials secure and notify support if you suspect unauthorized access.",
      ],
    },
    {
      title: "4. Nature of Trading",
      paragraphs: [
        "All trading activity within the App uses simulated prices and virtual trading balances. No real financial-market orders are executed, and no real currencies, securities, or financial instruments are bought or sold through the App.",
      ],
    },
    {
      title: "5. Tournament Rules",
      paragraphs: [
        "Tournaments may have specific rules covering duration, entry requirements, starting virtual balances, scoring, rankings, and virtual rewards. Users must follow the rules displayed for each tournament. Violations, cheating, or attempts to manipulate results may lead to disqualification or account restrictions.",
      ],
    },
    {
      title: "6. Use of Synthetic Charts",
      paragraphs: [
        "The App uses synthetic charts designed for gameplay. These charts do not necessarily reflect real-world market movements. Price movements are simulated for the App's competition and learning environment.",
      ],
    },
    {
      title: "7. Trading Simulation",
      paragraphs: [
        "Users may open simulated Buy or Sell positions based on their expectations of price movements within the simulated environment. All positions use virtual balances and do not result in the purchase or sale of real financial instruments. Simulated trading results have no effect on real financial markets and should not be interpreted as actual investment performance.",
      ],
    },
    {
      title: "8. Virtual Funds and Coins",
      paragraphs: [
        "Demo balances, tournament balances, and Coins Wallet balances are virtual and exist only within the App. They are not bank deposits, real money, or financial assets.",
        "Virtual coins may be awarded through eligible referrals, approved tournament activities, or other in-app reward features. Tournament accounts may receive predefined virtual trading balances for simulation purposes.",
        "Virtual coins and trading balances have no cash value. They cannot be withdrawn, transferred for cash, exchanged for real money, or redeemed for financial value. No real-money deposits, cash withdrawals, or Mobile Money payments are provided through the Coins Wallet.",
        "Tournament rankings reflect performance within the simulation. Rewards, where offered in this Coins version, are virtual coins only and are subject to the applicable tournament rules.",
      ],
    },
    {
      title: "9. User Conduct",
      paragraphs: [
        "You must not hack, manipulate, exploit, or interfere with the App, its balances, rankings, referrals, or tournament results. Fraudulent activity, abuse, or attempts to gain an unfair advantage may result in restrictions, disqualification, or account termination.",
      ],
    },
    {
      title: "10. Virtual Economy",
      paragraphs: [
        "The App's virtual economy is intended solely for in-app gameplay. Virtual coins may be credited, deducted, adjusted, or reset where required by game rules, approved reward processing, technical corrections, or the prevention of abuse.",
        "Virtual coins cannot be purchased, withdrawn, or redeemed for cash through the Coins Wallet. Users should review the applicable in-app rules before participating in tournaments or other features that use virtual coins.",
      ],
    },
    {
      title: "11. Legal Compliance",
      paragraphs: [
        "FX ARENA provides simulated trading and virtual competition features. It does not execute real-money forex trades or provide brokerage, investment management, or financial advisory services. Users are responsible for using the App in accordance with applicable laws.",
      ],
    },
    {
      title: "12. Privacy and Data",
      paragraphs: [
        "User information is handled in accordance with our Privacy Policy. Account information and gameplay records may be processed to operate the App, maintain virtual balances, calculate rankings, administer rewards, protect accounts, and provide support. We do not sell users' personal information.",
      ],
    },
    {
      title: "13. Intellectual Property",
      paragraphs: [
        "App designs, charts, visuals, branding, and other content are owned by FX ARENA or used with permission. You may not reproduce, distribute, or commercially exploit protected content without appropriate authorization.",
      ],
    },
    {
      title: "14. Limitation of Liability",
      paragraphs: [
        'The App is provided on an "as-is" and "as-available" basis to the extent permitted by law. We do not guarantee uninterrupted, error-free operation or the permanent availability of virtual balances, rankings, or features. Nothing in these Terms excludes liability that cannot lawfully be excluded.',
      ],
    },
    {
      title: "15. Risk Disclosure",
      paragraphs: [
        "Simulated trading performance does not predict or guarantee future real-world trading results. Users should not rely on App results when making real financial or investment decisions.",
      ],
    },
    {
      title: "16. Changes to the App",
      paragraphs: [
        "We may modify tournaments, rules, interface elements, charts, virtual balances, and features to maintain, improve, or secure the App. Where appropriate, material changes will be communicated through the App.",
      ],
    },
    {
      title: "17. Account Termination",
      paragraphs: [
        "We may restrict, suspend, or terminate accounts that violate these Terms, engage in fraud, manipulate results, or threaten the security and fair operation of the App. Users may contact support if they believe an action was taken in error.",
      ],
    },
    {
      title: "18. Governing Law",
      paragraphs: [
        "These Terms are governed by applicable laws in the jurisdiction where FX ARENA is legally established, subject to any mandatory consumer protection laws that apply.",
      ],
    },
    {
      title: "19. Contact",
      paragraphs: [
        "For support or questions about these Terms, use the support channels provided in the App or contact ebech@republic.beauty.",
      ],
    },
    {
      title: "20. Account Deletion",
      paragraphs: [
        "Users may request account deletion through the available account settings or support channels. After verification, account data will be deleted or handled according to applicable legal requirements and our Privacy Policy.",
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
      <article style={{ maxWidth: 850, margin: "0 auto", lineHeight: 1.7 }}>
        <h1 style={{ color: "#fff", fontSize: 32, marginBottom: 6 }}>
          FX ARENA — Terms &amp; Conditions
        </h1>

        <p style={{ color: "#aaa", marginBottom: 28 }}>
          Last Updated: October 2026
        </p>

        {sections.map((section) => (
          <section key={section.title} style={{ marginBottom: 24 }}>
            <h2 style={{ color: "#fff", fontSize: 20, marginBottom: 8 }}>
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
