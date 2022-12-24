const Section = ({ question, answers }) => {
  return (
    <section>
      <h2>{question}</h2>
      <div>
        {answers.map((answer) => (
          <button key={answer.id}>{answer.answer}</button>
        ))}
      </div>
    </section>
  );
};

export default Section;
