import { create } from "zustand";

const store = (set,get)=> ({
    choices: ['paper','rock','scissors'],
    score: 0,
    userChoice: '',
    houseChoice : '',
    result : '',
    rules: false,
    setRules: () => set((prevState) => ({ ...prevState, rules: !prevState.rules })),
    setUserChoice: (value)=>{
        set({userChoice: value});
        get().winner();
    },
    computerChoice: ()=>{
        const choice = get().choices[Math.floor(Math.random() * get().choices.length)];
        return choice
    },
    winner: ()=>{
        const computer = get().computerChoice();
        const value = get().userChoice;
        set({houseChoice: computer});
        if(value === computer){
            set({result: 'Game Tie'})
        }
        else if(value === 'rock' && computer === 'scissors' ||
                value === 'paper' && computer === 'rock' ||
                value === 'scissors' && computer === 'paper'
        ){
        get().setScore();
            set({result: 'You Win'})
        }
        else{
            set({result: 'Computer Win'})
        }
    },
    setScore : (state)=> set((prevState) => ({score: prevState.score+1})),
})

export const useStore = create(store);