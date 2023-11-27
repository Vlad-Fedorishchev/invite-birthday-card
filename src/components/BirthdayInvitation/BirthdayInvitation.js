import React from 'react';
import '../../components/BirthdayInvitation/BirthdayInvitation';
import ResponseButtons from '../../components/ResponseButtons/ResponseButtons';
import './BirthdayInvitation.css'

const BirthdayInvitation = () => {
  return (
    <div className="invitation-container">
      <div className='content-container'>
        <h1 className='text'>Привет, друзья!</h1>
        <p className='text'>
          Праздную свой день рождения 30 декабря по адресу б-р. Зоряний, 1/4.
          Будет классно, если вы присоединитесь!
        </p>
        <p className='text'>
          На подарке не настаиваю, но если хотите порадовать, деньги или что-то
          от вас лично буду рада, ваша компания и время проведённое с вами уже
          для меня ценный подарок!
        </p>
        <p className='text'>До встречи!</p>
        <ResponseButtons />
      </div>
    </div>
  );
};

export default BirthdayInvitation;