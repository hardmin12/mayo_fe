#import <RNKakaoLogs.h> //RNKakaoLogs 라이브러리 사용

- (BOOL)application:(UIApplication *)app
openURL:(NSURL *)url
options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
    if([RNKakaoLogs isKakaoTalkLoginUrl:url]) {
        return [RNKakaoLogs handleOpenUrl:url];
    }
    return NO;
}
