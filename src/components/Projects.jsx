function Projects() {
  const projects = [
    {
      title: 'US Flight Delay Analytics Pipeline',
      dates: '2025',
      tags: ['Python', 'Prefect', 'DuckDB', 'Great Expectations', 'Medallion Architecture', 'Streamlit', 'BTS API'],
      description: 'Industry-level data engineering pipeline processing 970K+ BTS flight records using Medallion Architecture (Bronze/Silver/Gold). Orchestrated with Prefect flows, validated with Great Expectations across 12 data quality checks, transformed with dbt-style DuckDB SQL models, and served through a 7-page Streamlit analytics dashboard.',
      github: 'https://github.com/nish0104/flight-pipeline',
    },
    {
      title: 'FDA Drug Adverse Event Analysis Pipeline',
      dates: '2025',
      tags: ['Python', 'FDA FAERS API', 'Pharmacovigilance', 'ROR', 'NetworkX', 'Plotly', 'Streamlit'],
      description: 'End-to-end pharmacovigilance pipeline that fetches real adverse event reports from the FDA FAERS API, detects drug-reaction signals using Reporting Odds Ratio (ROR) — the same method used by FDA analysts — and visualizes drug interaction networks through an interactive clinical-style Streamlit dashboard.',
      github: 'https://github.com/nish0104/faers-pipeline',
    },
    {
      title: 'SEC Filing ETL + RAG Q&A Engine',
      dates: '2025',
      tags: ['Python', 'LangChain', 'ChromaDB', 'Ollama', 'RAG', 'NLP', 'Streamlit'],
      description: 'End-to-end data pipeline that fetches SEC 10-K/10-Q filings from the free EDGAR API, parses and embeds them into a local vector database, and answers natural language questions using a fully local RAG chain with zero API costs.',
      github: 'https://github.com/nish0104/sec-rag-pipeline',
    },
    {
      title: 'Voice-to-Case Ticket Generator & Call QA Monitor',
      dates: '2025',
      tags: ['Python', 'Whisper', 'NLP', 'Pandas', 'gTTS'],
      description: 'Healthcare ops pipeline that converts call audio into structured service tickets using Whisper transcription and NLP entity extraction. Built a QA scorecard flagging compliance gaps; achieved 100% intent accuracy and 75% full QA pass rate on a 100-call synthetic dataset.',
    },
    {
      title: 'ArcBest ERM Signature Assessment',
      dates: '2025',
      tags: ['ERM', 'Risk Analytics', 'COSO', 'Power BI'],
      description: 'Built an Enterprise Risk Management assessment for ArcBest acquisition of Uber Freight. Applied COSO ERM and Indicator & Warning methodology to monitor cybersecurity, competitive margin, and integration risks with measurable thresholds and escalation triggers.',
    },
    {
      title: 'Healthcare Organization Executive Dashboard',
      dates: '2025',
      tags: ['Power BI', 'Data Integration', 'KPI Framework', 'Data Cleaning'],
      description: 'Capstone project for a mission-driven healthcare organization. Built an integrated Power BI executive dashboard combining marketing, web engagement, fundraising, and impact metrics. Defined KPI framework, cleaned multi-source data, and delivered actionable recommendations.',
    },
    {
      title: 'Bitcoin Twitter Sentiment & Price Movement',
      dates: '2025',
      tags: ['Python', 'Apache Spark', 'NLP', 'Random Forest', 'CoinDesk API'],
      description: 'Combined 937K+ tweets with hourly Bitcoin market data to classify short-term price direction. Engineered sentiment and volume features; Random Forest achieved 66.67% accuracy with 85.7% precision on upward moves.',
    },
    {
      title: 'EV CAFV Eligibility Analysis',
      dates: '2024',
      tags: ['Python', 'K-Means', 'SVM', 'Apriori', 'Data Mining'],
      description: 'Analyzed 235K+ Washington State EV registrations to predict Clean Alternative Fuel Vehicle eligibility. Used K-Means clustering, Association Rule Mining, and an SVM classifier achieving 99.99% accuracy.',
    },
    {
      title: 'Intelmatix: AI-Powered Foot Traffic Insights',
      dates: '2024',
      tags: ['Python', 'Apache Spark', 'Streamlit', 'Linear Regression', 'SafeGraph'],
      description: 'Built predictive foot-traffic forecasting for Target stores in LA using SafeGraph mobility data. Delivered an interactive Streamlit dashboard with staffing/inventory readiness meters and store-level map views.',
    },
    {
      title: 'Global Health & Population Dashboard',
      dates: '2024',
      tags: ['Tableau', 'Excel', 'DataBank API'],
      description: 'Integrated 125K+ World Bank records across 100+ health indicators to build three Tableau dashboards covering rural/urban population shifts, age dependency ratios, and HIV/health trends across West and South Africa.',
    },
    {
      title: 'Hospital Readmission Analytics',
      dates: '2024',
      tags: ['Python', 'Excel', 'Regression', 'Data Visualization'],
      description: 'Analyzed 18K+ CMS HRRP hospital records to evaluate Excess Readmission Ratios across Heart Failure, COPD, and Pneumonia. Found OR=1.88 for HF hospitals exceeding the benchmark; identified regional and systemic care patterns.',
    },
    {
      title: 'Energy Consumption Analysis',
      dates: '2024',
      tags: ['R', 'ETS', 'Spearman Correlation', 'Kruskal-Wallis', 'Time Series'],
      description: 'Studied energy usage patterns across 45K+ building records. Applied non-parametric tests to confirm significant seasonal variation and built an Exponential Smoothing forecast to model summer/winter peak demand cycles.',
    },
    {
      title: 'Crime Reporting System',
      dates: '2023',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      description: 'A web-based case management application where victims/witnesses submit crime reports (including anonymously) and police staff assign, track, and resolve cases end-to-end. Built with four user roles: Admin, Client, Police In-charge, and Police Officer.',
    },
  ]

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
    }}>
      <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#f1f5f9' }}>
        Projects
      </h2>
      <div style={{
        width: '60px',
        height: '4px',
        background: '#60a5fa',
        borderRadius: '2px',
        marginTop: '12px',
        marginBottom: '40px',
      }} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        maxWidth: '1100px',
      }}>
        {projects.map(function(project) {
          return (
            <div
              key={project.title}
              onMouseEnter={function(e) {
                e.currentTarget.style.borderColor = '#60a5fa'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.borderColor = '#334155'
              }}
              style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'border-color 0.2s',
              }}
          >
              <p style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>{project.dates}</p>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#f1f5f9', lineHeight: '1.4' }}>
                {project.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map(function(tag) {
                  return (
                    <span key={tag} style={{
                      fontSize: '12px',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: '1px solid #334155',
                      color: '#60a5fa',
                    }}>
                      {tag}
                    </span>
                  )
                })}
              </div>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>
                {project.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects