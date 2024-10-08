/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { IService } from '../types/Services';


/* ----- DATAS ----- */
let lastFetch: number = 0;
const services: Map<number, IService> = new Map();

// TODO: Remove this when the fetch is working
const tmp: IService[] = [
    {
        service_id: 1,
        name: "Github",
        status: false,
        icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        buttons: [
            {
                name: "not_linked",
                path: ""
            },
        ],
        actions: [
        ],
        reactions: [
        ],
    },
    {
        service_id: 2,
        name: "Discord",
        status: true,
        icon: "https://support.discord.com/hc/user_images/Tb2e5KLD1N4L_3PFVZ2Uuw.png",
        buttons: [
            {
                name: "linked",
                path: ""
            },
            {
                name: "add_bot",
                path: ""
            },
        ],
        actions: [
            {
                action_id: 1,
                name: "receive_private_message",
            },
            {
                action_id: 2,
                name: "receive_friend_request",
            },
        ],
        reactions: [
            {
                reaction_id: 1,
                name: "send_private_message",
            },
            {
                reaction_id: 2,
                name: "send_friend_request",
            },
        ],
    },
    {
        service_id: 3,
        name: "Spotify",
        status: true,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDq7YmOwPrUEXB1gaGgWmgMYsqdYrtFu4sA&s",
        buttons: [
            {
                name: "linked",
                path: "",
            },
        ],
        actions: [
            {
                action_id: 3,
                name: "song_started",
            },
        ],
        reactions: [
        ],
    },
    {
        service_id: 4,
        name: "Twitch",
        status: true,
        icon: "https://image.similarpng.com/very-thumbnail/2021/01/Twitch-logo-on-transparent-background-PNG.png",
        buttons: [
            {
                name: "linked",
                path: "",
            },
        ],
        actions: [
            {
                action_id: 3,
                name: "live_started",
            },
            {
                action_id: 4,
                name: "live_ended",
            },
        ],
        reactions: [
            {
                reaction_id: 3,
                name: "send_chat_message",
            },
            {
                reaction_id: 4,
                name: "send_notification",
            },
            {
                reaction_id: 5,
                name: "send_donation",
            }
        ],
    },
    {
        service_id: 5,
        name: "Twitter",
        status: false,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png",
        buttons: [
            {
                name: "not_linked",
                path: "",
            },
        ],
        actions: [
        ],
        reactions: [
        ],
    },
    {
        service_id: 6,
        name: "Youtube",
        status: true,
        icon: "https://img.freepik.com/vecteurs-premium/logo-youtube-rouge-logo-medias-sociaux_197792-1803.jpg?w=360",
        buttons: [
            {
                name: "linked",
                path: "",
            },
        ],
        actions: [
            {
                action_id: 5,
                name: "video_uploaded",
            },
            {
                action_id: 6,
                name: "video_liked",
            }
        ],
        reactions: [
            {
                reaction_id: 6,
                name: "comment_video",
            },
            {
                reaction_id: 7,
                name: "like_video",
            },
            {
                reaction_id: 8,
                name: "share_video",
            }
        ],
    },
    {
        service_id: 7,
        name: "Reddit",
        status: false,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0neIueoYcxj62azhnFSpTxZFdQMcITEjCw&s",
        buttons: [
            {
                name: "not_linked",
                path: "",
            },
        ],
        actions: [
        ],
        reactions: [
        ],
    },
    {
        service_id: 8,
        name: "Google",
        status: true,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
        buttons: [
            {
                name: "linked",
                path: "",
            },
        ],
        actions: [
            {
                action_id: 7,
                name: "receive_email",
            },
            {
                action_id: 8,
                name: "receive_calendar_event",
            },
            {
                action_id: 9,
                name: "receive_contact_request",
            },
            {
                action_id: 10,
                name: "receive_document",
            }
        ],
        reactions: [
            {
                reaction_id: 9,
                name: "send_email",
            },
            {
                reaction_id: 10,
                name: "send_calendar_event",
            },
            {
                reaction_id: 11,
                name: "send_contact_request",
            },
            {
                reaction_id: 12,
                name: "send_document",
            }
        ],
    },
    {
        service_id: 9,
        name: "Facebook",
        status: false,
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png",
        buttons: [
            {
                name: "not_linked",
                path: "",
            },
        ],
        actions: [
        ],
        reactions: [
        ],
    },
    {
        service_id: 10,
        name: "Instagram",
        status: true,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",
        buttons: [
            {
                name: "linked",
                path: "",
            },
        ],
        actions: [
            {
                action_id: 11,
                name: "receive_private_message",
            },
            {
                action_id: 12,
                name: "receive_friend_request",
            },
            {
                action_id: 13,
                name: "post_like",
            },
            {
                action_id: 14,
                name: "story_seen",
            }
        ],
        reactions: [
            {
                reaction_id: 13,
                name: "send_private_message",
            },
            {
                reaction_id: 14,
                name: "send_friend_request",
            },
            {
                reaction_id: 15,
                name: "like_post",
            },
            {
                reaction_id: 16,
                name: "share_story",
            }
        ],
    },
];


/* ----- URLS ----- */
const baseUrl = 'http://localhost:3000/api/tips'; // TODO: Set services url


/* ----- FETCH ----- */
export async function fetchServices() {
    // try {
    //     const response = await fetchGet(baseUrl);
    //     const jsonResponse = await response.json();
    //     services.clear();
    //     lastFetch = Date.now();
    //     for (let i = 0; i < jsonResponse.length; i++) {
    //         const tmp = { ...jsonResponse[i] as IService };
    //         services.set(tmp.service_id, tmp);
    //     }
    // } catch (error) {
    //     console.error("Error fetching services: ", error);
    // }

    services.clear();
    lastFetch = Date.now();
    for (let i = 0; i < tmp.length; i++) {
        const tmpService = { ...tmp[i] as IService };
        services.set(tmpService.service_id, tmpService);
    }
}


/* ----- GETTERS ----- */
export async function getServices() {
    if (services.size === 0 || Date.now() - lastFetch > 1000 * 60 * 60 * 24)
        await fetchServices();
    return services;
}

