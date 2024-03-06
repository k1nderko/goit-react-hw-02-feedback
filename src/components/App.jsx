import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import countPositiveFeedbackPercentage from 'components/helpers/countPositiveFeedbackPercentage';
import countTotalFeedback from 'components/helpers/countTotalFeedback';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification ';
import PropTypes from 'prop-types';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleLeaveFeedback = feedbackType => {
        this.setState(prevState => {
            return {
                [feedbackType]: prevState[feedbackType] + 1,
            };
        });
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = countTotalFeedback(this.state);
        const positiveFeedback = countPositiveFeedbackPercentage(this.state);

        return (
            <div>
                <Section title="Leave Feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleLeaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeedback > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={positiveFeedback}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}

App.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
};

export { App };
