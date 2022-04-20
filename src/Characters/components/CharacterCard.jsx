import React from 'react';
import * as PropTypes from 'prop-types';
import { useLocation } from 'wouter';
import ContainerCard from '../../Shared/components/ui/ContainerCard';


const CharacterCard = ({char_id, img, name, nickname, birthday}) => {
    const [,setLocation] = useLocation();

    return (<ContainerCard
        onClick={() => setLocation(`/characters/${char_id}`)}>
        <img loading="lazy" className="object-cover rounded-t-sm  md:h-auto" src={img} />
        <div className="flex flex-col ml-2 mt-1 h-100 px-2">
            <p className="text-lg font-bold text-gray-700">{name}</p>
            <p className="ml-2 italic">{nickname}</p>
            <p className="self-end ">{birthday}</p>
        </div>
    </ContainerCard>);
};

CharacterCard.propTypes = {
    char_id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
};

export default CharacterCard;