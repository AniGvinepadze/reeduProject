import { userAnne, userElijah, userJames, userRyan } from "../../../assets";

export default function DetailComments() {
  return (
    <div className="flex justify-center items-center rounded-[10px] mt-6 shadow-md">
      <div className="w-full bg-white rounded-lg p-6">
        <h1 className="text-lg font-bold text-gray-900 mb-6">4 Comments</h1>

        <div className="mb-6">
          <div className="flex items-start space-x-4">
            <img
              src={userElijah}
              alt="Elijah Moss"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-gray-900">Elijah Moss</h2>
                <button className="text-blue-600 text-sm hover:underline">
                  Reply
                </button>
              </div>
              <p className="text-gray-600 text-sm">@hexagon.bestagon</p>
              <p className="mt-2 text-gray-700">
                Also, please allow styles to be applied based on system
                preferences. I would love to be able to browse Frontend Mentor
                in the evening after my device's dark mode turns on without the
                bright background it currently has.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <div className="flex items-start space-x-4">
            <img
              src={userJames}
              alt="James Skinner"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-gray-900">James Skinner</h2>
                <button className="text-blue-600 text-sm hover:underline">
                  Reply
                </button>
              </div>
              <p className="text-gray-600 text-sm">@hummingbird1</p>
              <p className="mt-2 text-gray-700">
                Second this! I do a lot of late-night coding and reading. Adding
                a dark theme can be great for preventing eye strain and the
                headaches that result. It's also quite a trend with modern apps
                and apparently saves battery life.
              </p>
            </div>
          </div>

          <div className="absolute left-6 top-16 h-[300px] border-l-2 border-gray-200"></div>


          <div className="mt-6 pl-12">
            <div className="flex items-start space-x-4">
              <img
                src={userAnne}
                alt="Anne Valentine"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-gray-900">Anne Valentine</h2>
                  <button className="text-blue-600 text-sm hover:underline">
                    Reply
                  </button>
                </div>
                <p className="text-gray-600 text-sm">@annev1990</p>
                <p className="mt-2 text-gray-700">
                  <span className="text-[#AD1FEA] font-bold">
                    @hummingbird1
                  </span>
                  While waiting for dark mode, there are browser extensions that
                  will also do the job. Search for "dark theme" followed by your
                  browser. There might be a need to turn off the extension for
                  sites with naturally black backgrounds though.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pl-12">
            <div className="flex items-start space-x-4">
              <img
                src={userRyan}
                alt="Ryan Welles"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-gray-900">Ryan Welles</h2>
                  <button className="text-blue-600 text-sm hover:underline">
                    Reply
                  </button>
                </div>
                <p className="text-gray-600 text-sm">@voyager.344</p>
                <p className="mt-2 text-gray-700">
                  <span className="text-[#AD1FEA] font-bold">@annev1990 </span>
                  Good point! Using any kind of style extension is great and can
                  be highly customizable, like the ability to change contrast
                  and brightness. I'd prefer not to use one of such extensions,
                  however, for security and privacy reasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
