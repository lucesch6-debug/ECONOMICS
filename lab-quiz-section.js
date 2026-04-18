window.labQuizSection = {
  id: "lab",
  title: "Economics Quiz - Lab Section",
  eyebrow: "Labs",
  description:
    "40 questions de revision, 4 par lab, recentrees sur les principes economiques a retenir plutot que sur des micro-details.",
  questions: [
    {
      shortLabel: "1A",
      group: "Lab 1 - Production and firms",
      meta: "Module 1",
      prompt: "Which general rule best summarizes the production decision in the lab?",
      options: [
        {
          text: "Produce until total revenue becomes positive.",
          correct: false
        },
        {
          text: "Stop producing before the cost of an extra unit exceeds the revenue it generates.",
          correct: true
        },
        {
          text: "Always produce as much as possible if fixed costs are high.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "1B",
      group: "Lab 1 - Production and firms",
      meta: "Module 1",
      prompt: "When an additional cost is still avoidable and every production level yields a loss, what is the profit-maximizing decision?",
      options: [
        {
          text: "Produce 3,000 units, because this is the smallest loss among positive outputs.",
          correct: false
        },
        {
          text: "Produce 4,000 units, because revenue is highest there.",
          correct: false
        },
        {
          text: "Produce nothing, because the true maximum profit is zero.",
          correct: true
        }
      ]
    },
    {
      shortLabel: "1C",
      group: "Lab 1 - Production and firms",
      meta: "Module 1",
      prompt: "How should a firm treat a cost that has already been paid and cannot be recovered?",
      options: [
        {
          text: "It should recover it first before comparing any current revenues and costs.",
          correct: false
        },
        {
          text: "It should treat it as sunk and base the current decision on remaining costs and revenues.",
          correct: true
        },
        {
          text: "It should divide it equally over future units and keep producing no matter what.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "1D",
      group: "Lab 1 - Production and firms",
      meta: "Module 1",
      prompt: "What does the carbon-tax exercise mainly show about transporting cotton by sea for one T-shirt?",
      options: [
        {
          text: "A EUR 100 carbon tax would add only a very small cost per T-shirt.",
          correct: true
        },
        {
          text: "A EUR 100 carbon tax would make imported cotton clearly more expensive than French linen.",
          correct: false
        },
        {
          text: "Maritime transport would become impossible because its carbon cost would exceed the value of the T-shirt.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "2A",
      group: "Lab 2 - Consumption and behavior",
      meta: "Module 2",
      prompt: "What is the anchor effect illustrated by the restaurant experiment?",
      options: [
        {
          text: "An irrelevant first number can shift the willingness to pay stated afterward.",
          correct: true
        },
        {
          text: "People always choose the cheapest option when they are uncertain.",
          correct: false
        },
        {
          text: "Consumers never change their willingness to pay once they have formed preferences.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "2B",
      group: "Lab 2 - Consumption and behavior",
      meta: "Module 2",
      prompt: "What is the main framing lesson from the disease experiment?",
      options: [
        {
          text: "People become more risk-averse when a choice is framed as a loss than as a gain.",
          correct: false
        },
        {
          text: "People tend to be more willing to take risks when outcomes are framed as losses.",
          correct: true
        },
        {
          text: "Framing only matters when probabilities are unknown.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "2C",
      group: "Lab 2 - Consumption and behavior",
      meta: "Module 2",
      prompt: "What does evaluability bias mean in the vaccination and dinnerware examples?",
      options: [
        {
          text: "People systematically prefer the option with the largest total quantity.",
          correct: false
        },
        {
          text: "People focus on average quality or percentage reached rather than total impact in separate evaluation.",
          correct: true
        },
        {
          text: "People refuse to compare options unless prices are provided.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "2D",
      group: "Lab 2 - Consumption and behavior",
      meta: "Module 2",
      prompt: "Why are randomized experiments useful in economics?",
      options: [
        {
          text: "Because they guarantee that every participant makes the rational choice.",
          correct: false
        },
        {
          text: "Because they help identify causal effects by assigning treatments randomly.",
          correct: true
        },
        {
          text: "Because they replace the need for any theoretical reasoning.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "3A",
      group: "Lab 3 - Strategic interactions",
      meta: "Module 3",
      prompt: "In the two-thirds beauty contest, what is the Nash equilibrium if players reason all the way through?",
      options: [
        {
          text: "50",
          correct: false
        },
        {
          text: "33",
          correct: false
        },
        {
          text: "0",
          correct: true
        }
      ]
    },
    {
      shortLabel: "3B",
      group: "Lab 3 - Strategic interactions",
      meta: "Module 3",
      prompt: "What does level-k theory emphasize in the beauty-contest game?",
      options: [
        {
          text: "Players all jump immediately to the Nash equilibrium without intermediate reasoning.",
          correct: false
        },
        {
          text: "Players use limited, step-by-step reasoning about what others may do.",
          correct: true
        },
        {
          text: "Players always cooperate if they repeat the game often enough.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "3C",
      group: "Lab 3 - Strategic interactions",
      meta: "Module 3",
      prompt: "When the winners share a prize proportional to the average chosen number, what changes?",
      options: [
        {
          text: "Players have an incentive to choose higher numbers, but the Nash equilibrium remains 0.",
          correct: true
        },
        {
          text: "The Nash equilibrium jumps from 0 to 1000.",
          correct: false
        },
        {
          text: "The prize rule removes strategic interaction entirely.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "3D",
      group: "Lab 3 - Strategic interactions",
      meta: "Module 3",
      prompt: "What is the main lesson about communication in this game?",
      options: [
        {
          text: "Communication changes the Nash equilibrium as soon as players can talk.",
          correct: false
        },
        {
          text: "Without a credible punishment mechanism, promises alone are not enough to sustain high numbers.",
          correct: true
        },
        {
          text: "Communication makes deviation impossible.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "4A",
      group: "Lab 4 - Industrial organization",
      meta: "Module 4",
      prompt: "In a Cournot duopoly, what defines a Nash equilibrium?",
      options: [
        {
          text: "Each firm chooses the quantity that maximizes joint profit.",
          correct: false
        },
        {
          text: "Each firm chooses the best response to the other firm's quantity.",
          correct: true
        },
        {
          text: "Each firm charges the same price as the other firm.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "4B",
      group: "Lab 4 - Industrial organization",
      meta: "Module 4",
      prompt: "What is the Cournot equilibrium quantity pair in the lab?",
      options: [
        {
          text: "3 and 3",
          correct: false
        },
        {
          text: "4 and 4",
          correct: true
        },
        {
          text: "6 and 3",
          correct: false
        }
      ]
    },
    {
      shortLabel: "4C",
      group: "Lab 4 - Industrial organization",
      meta: "Module 4",
      prompt: "What is the main strategic advantage of Firm A in the Stackelberg version of the game?",
      options: [
        {
          text: "It can commit first and benefit from a first-mover advantage.",
          correct: true
        },
        {
          text: "It faces zero production cost while Firm B does not.",
          correct: false
        },
        {
          text: "It can force Firm B to produce zero by law.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "4D",
      group: "Lab 4 - Industrial organization",
      meta: "Module 4",
      prompt: "Why is collusion fragile in the communication round?",
      options: [
        {
          text: "Because each firm can gain by secretly producing more if there is no punishment for deviation.",
          correct: true
        },
        {
          text: "Because collusion is always a Nash equilibrium in quantity games.",
          correct: false
        },
        {
          text: "Because communication automatically forces both firms to produce 4.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "5A",
      group: "Lab 5 - Incentives",
      meta: "Module 5",
      prompt: "What makes the 3-point premium in Game 1 a fair price?",
      options: [
        {
          text: "It is equal to the expected loss: 30% of 10 points.",
          correct: true
        },
        {
          text: "It guarantees that the insurer earns a positive profit on every player.",
          correct: false
        },
        {
          text: "It fully reflects only the low-loss players' risk.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "5B",
      group: "Lab 5 - Incentives",
      meta: "Module 5",
      prompt: "Why can a single insurance contract priced at the average fair premium create losses for the insurer?",
      options: [
        {
          text: "Because hidden information can attract mainly high-loss players, creating adverse selection.",
          correct: true
        },
        {
          text: "Because all players always refuse insurance when prices are fair.",
          correct: false
        },
        {
          text: "Because expected losses become zero once insurance exists.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "5C",
      group: "Lab 5 - Incentives",
      meta: "Module 5",
      prompt: "What does voting before knowing whether you will be lucky or unlucky illustrate?",
      options: [
        {
          text: "Moral hazard.",
          correct: false
        },
        {
          text: "The veil of ignorance.",
          correct: true
        },
        {
          text: "The anchor effect.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "5D",
      group: "Lab 5 - Incentives",
      meta: "Module 5",
      prompt: "Why does a menu of contracts help the insurer in Game 3?",
      options: [
        {
          text: "Because every player is forced to buy the same contract.",
          correct: false
        },
        {
          text: "Because different contracts induce self-selection and reveal types through choices.",
          correct: true
        },
        {
          text: "Because insurance becomes free for everyone.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "6A",
      group: "Lab 6 - Inflation and unemployment",
      meta: "Module 6",
      prompt: "In the job search model, what is the reservation wage?",
      options: [
        {
          text: "The wage that maximizes the employer's profit.",
          correct: false
        },
        {
          text: "The minimum wage offer at which the job seeker accepts.",
          correct: true
        },
        {
          text: "The unemployment benefit paid by the government.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "6B",
      group: "Lab 6 - Inflation and unemployment",
      meta: "Module 6",
      prompt: "According to the model, when does a job seeker accept an offer?",
      options: [
        {
          text: "Only when the offer is strictly above every earlier offer.",
          correct: false
        },
        {
          text: "Whenever the offer is greater than or equal to the reservation wage.",
          correct: true
        },
        {
          text: "Only at the very last round of the search process.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "6C",
      group: "Lab 6 - Inflation and unemployment",
      meta: "Module 6",
      prompt: "How does the reservation wage evolve during the job search process in the lab's model?",
      options: [
        {
          text: "It is constant from the first offer to the last.",
          correct: false
        },
        {
          text: "It may be relatively high at first because of learning, then fall later as unemployment risk becomes more salient.",
          correct: true
        },
        {
          text: "It always rises over time because job seekers become more confident.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "6D",
      group: "Lab 6 - Inflation and unemployment",
      meta: "Module 6",
      prompt: "What effect do worse labor market conditions have on the reservation wage, according to the model?",
      options: [
        {
          text: "High unemployment lowers the reservation wage.",
          correct: true
        },
        {
          text: "High unemployment raises the reservation wage.",
          correct: false
        },
        {
          text: "High unemployment has no effect on the reservation wage.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "7A",
      group: "Lab 7 - GDP and fiscal policy",
      meta: "Module 7",
      prompt: "Why does one household's production decision affect demand for other goods in the village model?",
      options: [
        {
          text: "Because household consumption is tied to production and becomes demand for all goods.",
          correct: true
        },
        {
          text: "Because the Council changes prices whenever one household produces more.",
          correct: false
        },
        {
          text: "Because overproduction is automatically exported to the rest of the world.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "7B",
      group: "Lab 7 - GDP and fiscal policy",
      meta: "Module 7",
      prompt: "With government demand equal to 20 and households consuming 80% of production, what is the equilibrium production per household?",
      options: [
        {
          text: "80",
          correct: false
        },
        {
          text: "100",
          correct: true
        },
        {
          text: "120",
          correct: false
        }
      ]
    },
    {
      shortLabel: "7C",
      group: "Lab 7 - GDP and fiscal policy",
      meta: "Module 7",
      prompt: "Why does an increase in government demand raise total production by more than the initial increase?",
      options: [
        {
          text: "Because the extra demand creates extra income, which generates additional consumption demand.",
          correct: true
        },
        {
          text: "Because households stop consuming when the government spends more.",
          correct: false
        },
        {
          text: "Because the price of all goods automatically doubles.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "7D",
      group: "Lab 7 - GDP and fiscal policy",
      meta: "Module 7",
      prompt: "What is the fiscal multiplier in the lab when households consume 80% of production?",
      options: [
        {
          text: "4",
          correct: false
        },
        {
          text: "5",
          correct: true
        },
        {
          text: "20",
          correct: false
        }
      ]
    },
    {
      shortLabel: "8A",
      group: "Lab 8 - Money and monetary policy",
      meta: "Module 8",
      prompt: "What key inefficiency of barter does the emergence of money help relax?",
      options: [
        {
          text: "Diminishing returns.",
          correct: false
        },
        {
          text: "The double coincidence of wants.",
          correct: true
        },
        {
          text: "Adverse selection.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "8B",
      group: "Lab 8 - Money and monetary policy",
      meta: "Module 8",
      prompt: "Which good tends to emerge as money in the lab, and why?",
      options: [
        {
          text: "Good 1, because it has the lowest storage cost.",
          correct: true
        },
        {
          text: "Good 2, because Type 1 agents produce it.",
          correct: false
        },
        {
          text: "Good 3, because it depreciates the most and is therefore more urgent to trade.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "8C",
      group: "Lab 8 - Money and monetary policy",
      meta: "Module 8",
      prompt: "Why might an agent accept a good they do not want to consume immediately?",
      options: [
        {
          text: "Because holding a generally accepted good can make future exchange easier.",
          correct: true
        },
        {
          text: "Because consumption utility is higher for goods they do not like.",
          correct: false
        },
        {
          text: "Because the lab forbids agents from keeping their current good.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "8D",
      group: "Lab 8 - Money and monetary policy",
      meta: "Module 8",
      prompt: "What is the main effect of an endogenous currency on trade in this lab?",
      options: [
        {
          text: "It reduces transaction costs and allows more mutually beneficial exchanges.",
          correct: true
        },
        {
          text: "It eliminates all storage costs for every good.",
          correct: false
        },
        {
          text: "It guarantees that every trade becomes perfectly efficient immediately.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "9A",
      group: "Lab 9 - Environment",
      meta: "Module 9",
      prompt: "What is the direct effect of a carbon tax on a polluting firm's production decision?",
      options: [
        {
          text: "It lowers marginal cost and encourages more output.",
          correct: false
        },
        {
          text: "It adds to marginal cost and tends to reduce optimal output.",
          correct: true
        },
        {
          text: "It has no effect because the firm is a price taker.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "9B",
      group: "Lab 9 - Environment",
      meta: "Module 9",
      prompt: "Why can successful clean R&D improve a firm's position under environmental regulation?",
      options: [
        {
          text: "Because lower emissions per unit reduce the tax or permit cost attached to each unit produced.",
          correct: true
        },
        {
          text: "Because clean innovation makes the output price rise automatically.",
          correct: false
        },
        {
          text: "Because a cleaner firm is no longer subject to any production cost.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "9C",
      group: "Lab 9 - Environment",
      meta: "Module 9",
      prompt: "In a cap-and-trade system, what is the opportunity cost of using one pollution right?",
      options: [
        {
          text: "The value of the output that the firm could have imported instead.",
          correct: false
        },
        {
          text: "The possibility of selling that right instead of using it.",
          correct: true
        },
        {
          text: "The cost of producing one extra pollution right inside the firm.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "9D",
      group: "Lab 9 - Environment",
      meta: "Module 9",
      prompt: "When can a cap-and-trade system generate the same production and emission choices as a carbon tax?",
      options: [
        {
          text: "When the cap is designed to allow the same total pollution as under the tax, so the permit price is equivalent to the tax.",
          correct: true
        },
        {
          text: "Whenever firms are allowed to communicate before trading rights.",
          correct: false
        },
        {
          text: "Only if every firm has exactly the same technology and emissions.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "10A",
      group: "Lab 10 - Growth",
      meta: "Module 10",
      prompt: "Which concept is explicitly used in the lab to compare green growth and degrowth?",
      options: [
        {
          text: "Decoupling.",
          correct: true
        },
        {
          text: "Stagflation.",
          correct: false
        },
        {
          text: "Purchasing power parity.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "10B",
      group: "Lab 10 - Growth",
      meta: "Module 10",
      prompt: "Which perspective is explicitly associated with 'wellbeing within planetary boundaries'?",
      options: [
        {
          text: "Post-growth.",
          correct: true
        },
        {
          text: "Green growth.",
          correct: false
        },
        {
          text: "Stagflation.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "10C",
      group: "Lab 10 - Growth",
      meta: "Module 10",
      prompt: "How is the growth lab framed overall?",
      options: [
        {
          text: "It defends only one doctrine and excludes competing perspectives.",
          correct: false
        },
        {
          text: "It compares competing views such as degrowth, green growth, and post-growth.",
          correct: true
        },
        {
          text: "It is only a mathematical exercise on growth accounting formulas.",
          correct: false
        }
      ]
    },
    {
      shortLabel: "10D",
      group: "Lab 10 - Growth",
      meta: "Module 10",
      prompt: "Which question is explicitly part of the open debate at the end of the lab?",
      options: [
        {
          text: "Is green growth possible, and is it enough?",
          correct: true
        },
        {
          text: "What is the exact inflation target of the ECB?",
          correct: false
        },
        {
          text: "How many units should a Cournot firm produce?",
          correct: false
        }
      ]
    }
  ]
};
