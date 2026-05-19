function Skills() {
  const categories = [
    {
      title: 'Data & Analytics',
      skills: ['SQL', 'Python', 'R', 'Pandas', 'NumPy', 'Scikit-learn', 'Statsmodels', 'Apache Spark'],
    },
    {
      title: 'Visualization & Reporting',
      skills: ['Tableau', 'Power BI', 'Streamlit', 'Plotly', 'Excel', 'KPI Reporting'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'ChromaDB', 'DuckDB'],
    },
    {
      title: 'Data Engineering',
      skills: ['ETL/ELT Pipelines', 'Apache Spark', 'Prefect', 'Great Expectations', 'dbt-style SQL', 'Parquet', 'Data Quality', 'Data Governance'],
    },
    {
      title: 'Machine Learning & Statistics',
      skills: ['Linear Regression', 'Logistic Regression', 'Random Forest', 'SVM', 'K-Means', 'LASSO', 'BERT', 'VADER', 'Hypothesis Testing', 'Time Series', 'ROR'],
    },
    {
      title: 'NLP & AI',
      skills: ['LangChain', 'RAG Pipelines', 'ChromaDB', 'Ollama', 'OpenAI Whisper', 'gTTS', 'NLP Entity Extraction'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'Jupyter', 'Google Colab', 'VS Code', 'Microsoft Fabric', 'SafeGraph', 'BTS API', 'World Bank DataBank API'],
    },
  ]

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
    }}>
      <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#f1f5f9' }}>
        Skills
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
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1100px',
      }}>
        {categories.map(function(cat) {
          return (
            <div key={cat.title} style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#60a5fa', marginBottom: '16px' }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map(function(skill) {
                  return (
                    <span key={skill} style={{
                      fontSize: '13px',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      border: '1px solid #334155',
                      color: '#94a3b8',
                    }}>
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills