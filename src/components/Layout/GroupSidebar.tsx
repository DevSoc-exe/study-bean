import {
  AlarmClockCheck,
  AlarmClockMinus,
  Bookmark,
  CircleCheckBig,
  Github,
  Notebook,
  Plus,
  Text,
  User,
  UserRound,
  Users,
  UserX2,
} from "lucide-react";
import Icon from "../Icon";
import TabListItem from "../TabListItem";

const GroupSidebar = () => {

  const groups = [
    {
      "id": "grp101",
      "name": "PATTE TATT LO",
      "messages": 2,
      "href": "/"
    },
    {
      "id": "grp102",
      "name": "DevSoc.exe",
      "messages": 1,
      "href": "/"
    },
    {
      "id": "grp103",
      "name": "group study",
      "messages": 3,
      "href": "/"
    }
  ]

  const sessions = [
    {
      "id": "sess201",
      "name": "Session Alpha",
      "messages": 0,
      "href": "/"
    },
    {
      "id": "sess202",
      "name": "Session Beta",
      "messages": 3,
      "href": "/"
    },

  ];

  const people = [
    {
      "id": "person301",
      "name": "Jim",
      "messages": 0,
      "href": "/"
    },
    {
      "id": "person302",
      "name": "John",
      "messages": 2,
      "href": "/"
    },
    {
      "id": "person303",
      "name": "Ned",
      "messages": 0,
      "href": "/"
    },
    {
      "id": "person304",
      "name": "Cersie",
      "messages": 1,
      "href": "/"
    }
  ];

  const channels = [
    {
      "id": "chan401",
      "name": "General Chat",
      "messages": 0,
      "href": "/"
    },
    {
      "id": "chan402",
      "name": "Tech Talk",
      "messages": 0,
      "href": "/"
    },
    {
      "id": "chan403",
      "name": "Random",
      "messages": 8,
      "href": "/c"
    },
    {
      "id": "chan404",
      "name": "Project Updates",
      "messages": 6,
      "href": "/"
    },
    {
      "id": "chan405",
      "name": "Feedback",
      "messages": 0,
      "href": "/"
    },
    {
      "id": "chan406",
      "name": "Off-topic",
      "messages": 0,
      "href": "/"
    }
  ];

  const nowPlaying = {
    "title": "Summer Breeze",
    "artist": "The Soundwaves",
    "nextInQueue": "Ocean Waves",
    "totalTime": "3:45"
  };


  return (
    <article className="h-[calc(100vh-1.5rem)] backdrop-blur w-64 left-3 rounded-xl border-r-2 border-stone-200 flex flex-col py-4 pr-4 justify-start  items-start">
      <div>
        <h1 className="text-xl mt-1 text-stone-700 font-bold muted">Welcome, <span className="text-primary">Jamie</span></h1>
      </div>
      <hr className='w-full my-1' />

      <div className="flex flex-col h-full w-full justify-between items-start">
        <section className="w-full">
          <div className="mt-2">
            <h2 className="text-md mt-2 text-stone-700 font-semibold muted">Groups</h2>
            <div className="flex flex-col">
              {
                groups && groups.map((group) => (
                  <TabListItem key={group.id} className="" href={group.href} title={group.name} messages={group.messages}>
                    <Users className="size-4"></Users>
                  </TabListItem >
                ))
              }
            </div>
          </div>

          <div className="mt-2">
            <div className="flex flex-row justify-between items-center">
              <div className="text-md mt-2 text-stone-700 font-semibold muted">Your Sessions</div>
            </div>
            <div className="flex flex-col">
              {
                sessions && sessions.map((sess) => (
                  <TabListItem key={sess.id} className="" href={sess.href} title={sess.name} messages={sess.messages}>
                    <AlarmClockMinus className="size-4"></AlarmClockMinus>
                  </TabListItem >
                ))
              }
            </div>
          </div>

          <div className="mt-2">
            <h2 className="text-md mt-2 text-stone-700 font-semibold muted">People</h2>
            <div className="flex flex-col">
              {
                people && people.map((people) => (
                  <TabListItem key={people.id} className="" href={people.href} title={people.name} messages={people.messages}>
                    <User className="size-4"></User>
                  </TabListItem >
                ))
              }
            </div>
          </div>

          <div className="mt-2">
            <h2 className="text-md mt-2 text-stone-700 font-semibold muted">Channels</h2>
            <div className="flex flex-col">
              {
                channels && channels.map((channel) => (
                  <TabListItem key={channel.id} className="" href={channel.href} title={channel.name} messages={channel.messages}>
                    <Text className="size-4"></Text>
                  </TabListItem >
                ))
              }
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="mt-2">
            <h2 className="text-md mt-2 text-stone-700 font-semibold muted">Now Playing</h2>
            <div className="text-sm flex flex-col w-full">
              <div className="text-md font-bold text-stone-700 flex flex-row justify-between w-full">
                <span>{nowPlaying.title}</span>
                <span>{nowPlaying.totalTime}</span>
              </div>
              <span className="text-[12px]">By:  {nowPlaying.artist}</span>
              <span className="text-[12px]">Next: {nowPlaying.nextInQueue}</span>
            </div>
          </div>
        </section>
      </div>


    </article>
  );
};

export default GroupSidebar;
