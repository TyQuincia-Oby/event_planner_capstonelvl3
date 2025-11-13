import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Restore saved event data from localStorage
  useEffect(() => {
    const savedDate = localStorage.getItem("eventDate");
    const savedName = localStorage.getItem("eventName");
    if (savedDate && savedName) {
      setEventDate(savedDate);
      setEventName(savedName);
      setCountdownStarted(true);
    }
  }, []);

  // Countdown logic
  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("🎉 Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate]);

  // Update document title when countdown starts
  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName;
    }
  }, [countdownStarted, eventName]);

  // Handlers
  const handleSetCountdown = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate) {
      alert("Please enter both an event name and date.");
      return;
    }
    setCountdownStarted(true);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventName", eventName);
  };

  const handleStopCountdown = () => {
    setCountdownStarted(false);
  };

  const handleResetCountdown = () => {
    setCountdownStarted(false);
    setEventDate("");
    setEventName("");
    setTimeRemaining(0);
    localStorage.removeItem("eventDate");
    localStorage.removeItem("eventName");
  };

  // Format date
  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Convert milliseconds → days/hours/minutes/seconds
  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <div className="countdown-timer-container">
      <h2 className="countdown-name">
        {countdownStarted ? eventName : "Countdown Timer"}
      </h2>

      {!countdownStarted ? (
        <form className="countdown-form" onSubmit={handleSetCountdown}>
          <label>
            Event Name
            <input
              type="text"
              name="title"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </label>

          <label htmlFor="date-picker">
            Event Date
            <input
              type="date"
              name="date-picker"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </label>

          <button type="submit">Start Countdown</button>
        </form>
      ) : (
        <div className="countdown-display">
          <h3>
            Countdown to {eventName} on {formatDate(eventDate)}
          </h3>

          <div className="countdown-value">
            {days.toString().padStart(2, "0")} <span>days</span>
          </div>
          <div className="countdown-value">
            {hours.toString().padStart(2, "0")} <span>hours</span>
          </div>
          <div className="countdown-value">
            {minutes.toString().padStart(2, "0")} <span>minutes</span>
          </div>
          <div className="countdown-value">
            {seconds.toString().padStart(2, "0")} <span>seconds</span>
          </div>
        </div>
      )}

      <div className="control-buttons">
        {/* when countdown starts, stop and reset buttons will pop up */}
        {countdownStarted && (
          <>
            <button onClick={handleStopCountdown}>Stop</button>
            <button onClick={handleResetCountdown}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
}
