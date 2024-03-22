import React from "react";

const Case = () => {
  const CaseLaw = [
    {
      CaseName: "A.K. Gopalan vs. The State of Madras, 1950",
      Content:
        "A.K. Gopalan was a communist leader. He was detained in 1947 under common criminal law. While serving his sentence, he was served with an additional order in 1950 under section 3(1) of the Prevention Detention Act, 1950. He tested this particular second sentence through a writ habeas corpus challenging the legality of the order. The judgment of the case was that Article 21 applies to this act and it is legal within the framework of the constitution. Furthermore, sections 12 and 14 were ultra vires or not legal in the constitution. Individuals could, as per the provisions of this act, be detained for more than three months. Finally, the supreme court retained the legality of the order and dismissed the writ.",
    },
    {
      CaseName: "S.R. Bommai vs. Union of India, 1994",
      Content:
        "S.R. Bommai was the CM of the Janata Dal Party in Karnataka. He served for a period between August 1988 to April 1989. Finally, on April 21, 1989, his government was dissolved under Article 356. Thereafter President's rule was imposed. Bommai then submitted a writ petition against the said decision to the state High Court and the Supreme Court after being dismissed. The trademark decision of the Supreme Court said that the power of the President was not absolute in regards to dismissing a state. The President can only do so after his decision has been approved by both houses of the Parliament. What he can do till then is to dismiss the Legislative Assembly by dismissing the provisions of the Constitution governing it. However, this should be done only when mandatory for proclamation.",
    },
    {
      CaseName: "Shayara Bano vs Union of India, 2017",
      Content:
        "The Shayara Bano vs Union of India, 2017 is also referred to as the Triple Talaq case that declared triple talaq illegal in India. After being divorced by her husband, Rizqwan Ahmed in 2016, Shayara Bano filed a petition in the Supreme Court to hold the practice illegal. Soon she was backed by several women's rights organizations. Thereafter, on August 22nd, 2017 after setting up a five-judge bench was set up, a total ban was announced on triple talaq. The practice was declared unconstitutional and Bano's husband was ordered three years of jail time.",
    },
    {
      CaseName: "Also Read: Career Option after LLB",
      Content:
        "K. M. Nanavati vs State of Maharashtra, 1959 \n The high profile on which the Bollywood movie Rustom was made. K.M. Nanavati was a Naval Officer who upon discovering his wife's indiscretion proceeded to kill her lover. The case got a lot of media coverage and Nanavati received a lot of the general public's sympathy. Initially, the jury declared him not guilty by 8:1. This decision was set aside by the Bombay High Court who then convicted Nanavati of homicide and life imprisonment. Interestingly, this was the case because of which jury trials were abolished in India.",
    },
    {
      CaseName: "Indira Gandhi vs. Raj Narain, 1975",
      Content:
        "The Indira Gandhi vs. Raj Narain was a milestone case that led to the imposition of Emergency by the Government from 1975 to 1977. Opposition candidate Raj Narain, a candidate from the Rai Bariely constituency, filed a case alleging that Indira Gandhi won his seat through malpractices. On June 12th, 1975, Justice Jagmohan Lal Sinha declared Indira Gandhi to be guilty and that she could not take office for six years. This prompted her Government to declare a state of emergency that lasted two years. Thousands were arrested and the media was silenced. Ultimately the Indira Gandhi government rewrote the law she was found guilty of.",
    },
    {
      CaseName: "Vishaka and others vs. State of Rajasthan, 1997",
      Content:
        "This is one of the most prominent cases regarding sexual harassment of women in the workplace. After putting a stop to child marriage, a social worker from Rajasthan, Bhanwair Devi was gang-raped. She went on to file a case but the trial court ended up acquitting the accused. Devi received support from many social workers and was encouraged to file a case in the Supreme Court under the name Vishaka. A special branch of J.S. Verma, Sujata Manohar and B.N. Kripal set up definitions of sexual harassment. The decision formed the basis for the Sexual Harassment of Women at Workplace Act 2013.",
    },
    {
      CaseName: "Minerva Mills vs. Union of India, 1980",
      Content:
        "Minerva Mills from Karnataka was a large-scale factory that produced silk garments. The government, however, had doubts about the popular factory�s management and declared nationalization in the 1970s. Thereafter, the owners approached the Supreme Court for help in 1977. After much back and forth, the Supreme Court gave clarifications to the basic structure doctrine. It was ruled that the Parliament has limited powers, as outlined by the Constitution. Therefore, the Parliament cannot use this power to give itself more power. Additionally, it was agreed that the power to amend is not power to destroy, and as such, the Parliament cannot deprive an individual of the right to liberty and equality.",
    },
    {
      CaseName: "Maneka Gandhi vs. Union of India, 1978",
      Content:
        "A major case that showcased the description and limits of personal liberty is the Maneka Gandhi vs. Union of India. On June 1st, 1976, Maneka Gandhi was given a passport which the Ministry of External Affairs asked to surrender in a week. The reason given was �for public interest�. When Maneka Gandhi requested a written statement of reasons, none was given. She later files a writ petition challenging the move made by the Ministry of External Affairs. The court ruled that the ability to travel to another country is a matter of privilege of individual freedom under Article 21. Additionally, it said that the present law was not enough to control said individual freedom. Finally, the court directed for the visa to remain with the correct authorities till they deem fit to keep it.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">

      {CaseLaw.map((item) => {
        return (
          <div className="collapse collapse-plus bg-base-200 m-5 w-5/6">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              {item.CaseName}
            </div>
            <div className="collapse-content">
              <p>{item.Content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Case;
