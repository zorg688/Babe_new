// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Welcome to our experiment!
            <br />
            <br />
            Please take your time with these tasks and make sure your full concentration is focused on doing the experiment.
            You are in the <strong>${coin}</strong> group.`,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions',
    title: 'General Instructions',
    text:  `You will be presented two pictures. Your task is to decide if the two forms you see are the same (press"F") or different (press "J"). Please make your decision key as fast as possible.
            We will start with some practice trials before going to the real expriment.`,
    buttonText: 'go to practice trials'
});

const begin_practice = babeViews.view_generator('begin',{
    trials: 1,
    name: 'begin_pratice',
    buttonText: 'Start Practice',
    title: 'Practice Session',
    text: 'In the following, you wil be presented some data. Your answers will not be recorded, this part is just to make yourself familiar wih the task. After every example, you will receive a feedback wether your answer was right or wrong.'
});

const begin_experiment = babeViews.view_generator('begin',{
    trials: 1,
    name: 'begin_experiment',
    buttonText: 'Start actual trials',
    title: 'Actual trial Session',
    text: "Now that you've made yourself familiar with the data and task, the real trials will begin. Good luck!"
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/
const key_press_practice = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press_practice_data.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press_practice',
    trial_type: 'key_press_practice',
    data: _.shuffle(trial_info.key_press_practice_data),
    pause: 1000,
    fix_duration: 500,
    hook: {
      after_response_enabled: check_response
    }
});


// Here, we initialize a forcedChoice view
const key_press = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press_data.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press',
    trial_type: 'key_press',
    data: _.shuffle(trial_info.key_press_data),
    pause: 1000,
    fix_duration: 500
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale
