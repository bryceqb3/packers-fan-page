/*import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  doc, getDoc, updateDoc, setDoc
} from "firebase/firestore";

function VoteCard({ gameId, opponent, week }) {
  const [votes, setVotes] = useState({ win: 0, loss: 0 });
  const [voted, setVoted] = useState(localStorage.getItem(`vote-${gameId}`));

  const docRef = doc(db, "votes", gameId);

  useEffect(() => {
    const fetchVotes = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setVotes(docSnap.data());
      }
    };
    fetchVotes();
  }, [gameId]);

  const castVote = async (choice) => {
    if (voted) return;
    const docSnap = await getDoc(docRef);
    const data = docSnap.exists() ? docSnap.data() : { win: 0, loss: 0 };
    const updated = { ...data, [choice]: data[choice] + 1 };

    await setDoc(docRef, updated);
    setVotes(updated);
    localStorage.setItem(`vote-${gameId}`, choice);
    setVoted(choice);
  };

  return (
    <div className="vote-card">
      <h3>Week {week} vs {opponent}</h3>
      <div className="vote-buttons">
        <button onClick={() => castVote("win")} disabled={voted}>Win</button>
        <button onClick={() => castVote("loss")} disabled={voted}>Loss</button>
      </div>
      <p>Wins: {votes.win} | Losses: {votes.loss}</p>
      {voted && <p>You voted: {voted}</p>}
    </div>
  );
}

export default VoteCard;*/